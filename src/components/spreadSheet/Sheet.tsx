import { Flex, Box } from "@chakra-ui/core";
import React from "react";
import Spreadsheet from "react-spreadsheet";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Error from "../errors/Error";
import { TableDataQuery } from "../../generated/graphql";
import { CellData } from "../../pages/[table]";
interface SheetProps {
  data: TableDataQuery;
  loading: boolean;
  tableData: Array<Array<{}>>;
  onChange:(e:CellData[][]) => void;
  error: { message: string };
}

const Sheet: React.FC<SheetProps> = ({
  data,
  loading,
  tableData,
  onChange,
  error,
}) => {
  const renderTable = (): React.ReactElement<any> => {
    let tdata = tableData;
    if (!data && loading && tableData.length == 0) {
      return (
        <Flex
          justifyContent="center"
          alignItems="center"
          display={"flex"}
          m={"auto"}
          mt={"12%"}
        >
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </Flex>
      );
    }
    return (
      <Flex
        alignContent="center"
        justifyContent="center"
        flexDirection={"column"}
      >
        <Box alignSelf="center">
          <Spreadsheet onChange={(e) => onChange(e)} data={tdata} />
          {!loading && !data ? <Error error={error} /> : null}
        </Box>
      </Flex>
    );
  };
  return renderTable();
};

export default Sheet;
