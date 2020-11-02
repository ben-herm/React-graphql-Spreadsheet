import { Flex, Box, Text } from "@chakra-ui/core";
import React from "react";
import Spreadsheet from "react-spreadsheet";
import Error from "../Error";
interface SheetProps {
  data: any
  loading: boolean
  tableData: Array<Array<{}>>
  onChange: Function,
  error:{message: string}
}

const Sheet: React.FC<SheetProps> = ({
  data,
  loading,
  tableData,
  onChange,
  error
}) => {
  const renderTable = (): React.ReactElement<any> => {
    if (!data && loading && tableData.length == 0) {
      return (
        <Flex>
          <Text>loading...</Text>
        </Flex>
      );
    }
    let tdata = tableData;
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
