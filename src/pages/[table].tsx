import { Flex, Input, Button } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { InputType } from "zlib";
import Error from "../components/errors/Error";
import { Wrapper } from "../components/Wrapper";
import {
  useInsertHeaderValueMutation,
  useInsertValueMutation,
  useTableDataQuery,
  useUpdateValueMutation,
} from "../generated/graphql";
import "react-datasheet/lib/react-datasheet.css";
import { convertDataToTableValues } from "../utils/convertToTableUtil";
import Sheet from "../components/spreadSheet/Sheet";
import CustomBtn from "../components/common/CustomBtn";
import { useRouter } from "next/router";

export interface CellData {
  row_id?: number;
  header_id?: number;
  value?: string;
  value_id?: number;
  found?: boolean;
  type?: string;
}

interface tableProps {}

const Table: React.FC<tableProps> = () => {
  const router = useRouter();
  const { table } = router.query as { table: string };

  const { data, loading, error } = useTableDataQuery({
    variables: { table_id: parseInt(table) },
  });

  const [
    insert_values,
    { loading: insertValueFetch },
  ] = useInsertValueMutation();
  const [
    update_headers_by_pk,
    { loading: insertHeaderValueFetch },
  ] = useInsertHeaderValueMutation();
  const [
    update_values_by_pk,
    { loading: UpdateValueFetch },
  ] = useUpdateValueMutation();

  const [tableData, setTableData] = useState<CellData[][]>([]);
  const [storedChangedValues, setStoredChangedValues] = useState<
    Array<CellData>
  >([]);
  const [cellValue, setCellValue] = useState<CellData>({});
  const [counter, setCounter] = useState<number>(0);

  const RangeView = ({ cell, getValue }): React.ReactElement<InputType> => (
    <Input
      type="text"
      value={getValue({ data: cell })}
      isDisabled
      style={{ pointerEvents: "none" }}
    />
  );

  useEffect(() => {
    if (data) {
      let newData: Array<[[]]> = convertDataToTableValues(data);
      let editedData: Array<Array<{}>> = newData;
      let counter2: number = counter;
      let count = 1;
      let newArr: Array<Array<{}>> = [];
      if (data.values.length == 0) {
        counter2 = 1;
      } else {
        // instead of iterating get the highest value_id instead. - todo!
        data.values.forEach((obj: CellData) => {
          if (obj.value_id > 0) {
            count++;
            counter2 = count;
          }
        });
      }
      setCounter(counter2);
      newData.forEach((item, i) => {
        const newD = editedData[i].map((e) => {
          return { ...e, DataViewer: RangeView, DataEditor: RangeEdit };
        });
        newArr.push(newD);
      });
      setTableData(newArr);
    }
  }, [data, loading]);

  useEffect(() => {
    let counter2: number = counter;
    let newCell: CellData = cellValue;
    let newBuffer: Array<CellData> = storedChangedValues;
    let userParam: { exists: boolean; value_id: number } = {
      exists: false,
      value_id: null,
    };

    if (Object.keys(newCell).length > 0) {
      if (counter2 > 0) {
        let found =
          newBuffer.length > 0 &&
          newBuffer.find(
            (obj) =>
              obj.row_id == newCell.row_id && obj.header_id == newCell.header_id
          );
        tableData.forEach((arr) => {
          arr.forEach((obj) => {
            if (newCell.value_id && obj.value_id == newCell.value_id) {
              userParam = {
                exists: true,
                value_id: obj.value_id,
              };
            }
          });
        });
        let foundIndex = newBuffer.findIndex(
          (obj) =>
            obj.row_id == newCell.row_id && obj.header_id == newCell.header_id
        );
        if (newCell.value.length > 0) {
          if (found) {
            newBuffer[foundIndex] = {
              ...newCell,
              value_id: newBuffer[foundIndex].value_id,
            };
          } else {
            if (userParam.exists) {
              newCell.value_id = userParam.value_id;
            } else {
              newCell.value_id = counter2;
              setCounter(counter2 + 1);
            }
            newBuffer.push(newCell);
          }
        } else {
          if (found) {
            // implement delete mutation - todo!
            newBuffer.splice(0, foundIndex + 1);
          }
        }
        setStoredChangedValues(newBuffer);
      }
    }
  }, [cellValue]);

  const handleOnChange = (e, cell) => {
    let newValue: CellData = {
      row_id: cell.row_id,
      header_id: cell.header_id,
      value: e.target.value,
      value_id: cell.value_id,
      type: cell.type,
      found: false,
    };

    let foundIndex = data.values.findIndex(
      (val) => val.value_id == cell.value_id
    );

    if (foundIndex != -1) {
      newValue.found = true;
      newValue["value_id"] = data.values[foundIndex].value_id;
    }
    setCellValue(newValue);
  };

  const RangeEdit = ({
    getValue,
    cell,
    onChange,
  }): React.ReactElement<InputType> => (
    <Input
      type="text"
      onChange={async (e) => {
        handleOnChange(e, cell);
        onChange({ ...cell, value: e.target.value });
      }}
      value={getValue({ data: cell }) || 0}
      autoFocus
    />
  );

  const applyChangesOnClick = async () => {
    storedChangedValues.forEach(async (value) => {
      let val;
      if (value.type == "header") {
        let foundHeaderIndex = data.headers.findIndex(
          (val) => val.header_id == value.header_id
        );
        val = {
          header_id: value.header_id,
          header_name: value.value,
        };

        if (foundHeaderIndex !== -1)
          update_headers_by_pk({
            variables: {
              header_id: val.header_id,
              header_name: val.header_name,
            },
          });
      } else {
        let foundValueIndex = data.values.findIndex(
          (val) => val.value_id == value.value_id
        );
        val = {
          row_id: value.row_id,
          header_id: value.header_id,
          value: value.value,
          value_id: value.value_id,
        };
        if (foundValueIndex == -1) {
          insert_values({ variables: { ...val } });
        } else {
          update_values_by_pk({
            variables: { value_id: val.value_id, value: val.value },
          });
        }
      }
    });
    setStoredChangedValues([]);
  };

  if (!loading && !data) {
    return <Error error={error} />;
  }

  return (
    <>
      <Wrapper variant="small">
        {
          <Sheet
            data={data}
            loading
            tableData={tableData}
            onChange={(e) => setTableData(e)}
            error={error}
          />
        }
      </Wrapper>
      <Wrapper variant="small">
        <Flex padding={4} flexDirection={"row"}>
          <CustomBtn data={data} />
        </Flex>
        <Button
          alignSelf="center"
          width={"100%"}
          type="submit"
          isLoading={
            insertValueFetch || insertHeaderValueFetch || UpdateValueFetch
          }
          onClick={async () => applyChangesOnClick()}
          variantColor="teal"
        >
          Apply changes
        </Button>
      </Wrapper>
    </>
  );
};

export default Table;
