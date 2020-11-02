import { Flex, Text, Input, Button, Box } from "@chakra-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Spreadsheet from "react-spreadsheet";
import { InputType } from "zlib";
import { Wrapper } from "../components/Wrapper";
import {
  useInsertHeaderMutation,
  useInsertHeaderValueMutation,
  useInsertRowMutation,
  useInsertValueMutation,
  useTableDataQuery,
  useUpdateValueMutation,
} from "../generated/graphql";
import "react-datasheet/lib/react-datasheet.css";
import { convertDataToTableValues } from "../utils/convertToTableUtil";
import Sheet from "../components/spreadSheet/Sheet";

interface CellData {
  row_id?: number;
  header_id?: number;
  value?: string;
  value_id?: number;
  found?: boolean;
  type?: string;
}

interface tableProps {}

const Table: React.FC<tableProps> = () => {
  const { data, loading, error, fetchMore } = useTableDataQuery();
  const [
    insert_headers_one,
    { loading: insertHeaderFetch },
  ] = useInsertHeaderMutation();
  const [insert_rows_one, { loading: insertRowFetch }] = useInsertRowMutation();
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

  const [tableData, setTableData] = useState<Array<any>>([]);
  const [storedChangedValues, setStoredChangedValues] = useState<
    Array<CellData>
  >([]);
  const [cellValue, setCellValue] = useState<CellData>({});
  const [counter, setCounter] = useState(1);

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
      let newData = convertDataToTableValues(data);
      let datess = newData;
      let newArr = [];
      newData.forEach((item, i) => {
        const newD = datess[i].map((e) => {
          return { ...e, DataViewer: RangeView, DataEditor: RangeEdit };
        });
        newArr.push(newD);
      });
      setTableData(newArr);
    }
  }, [data, loading]);

  // logic to apply index => value_id to other fields in the spreadsheet because they do not exist in the data base.
  // first row is the headers row and it's logic is seperated by type.
  //

  useEffect(() => {
    let counter2: number = counter;
    let newCell: CellData = cellValue;
    let newBuffer: Array<CellData> = storedChangedValues;
    let userParam: {} = { exists: false, value_id: null };

    if (counter !== 1) {
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
            newCell.value_id = counter;
            setCounter(counter2 + 1);
          }
          newBuffer.push(newCell);
        }
      } else {
        if (found) {
          newBuffer.splice(0, foundIndex);
        }
      }
      setStoredChangedValues(newBuffer);
    } else {
      tableData.forEach((val, index) => {
        if (index > 0) {
          val.forEach((obj: CellData) => {
            if (obj.value_id !== null) {
              counter2++;
            }
          });
        }
      });
      setCounter(counter2);
    }
  }, [cellValue]);

  if (!loading && !data) {
    return (
      <Flex align="center" mr={"auto"}>
        <Text flex={1} mt={4} m="auto">
          {"The Query has failed"}
        </Text>
        <Text>{error?.message}</Text>
      </Flex>
    );
  }

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

  const addRowOnClick = async () => {
    await insert_rows_one({
      variables: { row_id: data.rows.length + 1 },
    });
    await fetchMore({});
  };

  const addColumnOnClick = async () => {
    await insert_headers_one({
      variables: { header_id: data.headers.length + 1, header_name: "New" },
    });
    await fetchMore({});
  };

  const applyChangesOnClick = async () => {
    let newStorage: Array<CellData> = [];
    storedChangedValues.forEach(async (value) => {
      let val;
      if (value.type == "header") {
        let foundHeaderIndex = data.values.findIndex(
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
        let foundIndex = data.values.findIndex(
          (val) => val.value_id == value.value_id
        );
        val = {
          row_id: value.row_id,
          header_id: value.header_id,
          value: value.value,
          value_id: value.value_id,
        };
        if (foundIndex == -1) {
          insert_values({ variables: { ...val } });
        } else {
          update_values_by_pk({
            variables: { value_id: val.value_id, value: val.value },
          });
        }
      }
    });
    setStoredChangedValues(newStorage);
  };

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
          <Button
            width={"50%"}
            type="submit"
            isLoading={insertRowFetch}
            onClick={async () => addRowOnClick()}
            variantColor="teal"
            marginX={4}
          >
            Add row
          </Button>
          <Button
            marginX={4}
            width={"50%"}
            type="submit"
            isLoading={insertHeaderFetch}
            onClick={async () => addColumnOnClick()}
            variantColor="teal"
          >
            Add column
          </Button>
        </Flex>
        <Button
          alignSelf="center"
          m={4}
          width={"100%"}
          type="submit"
          isLoading={insertValueFetch || insertHeaderValueFetch}
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
