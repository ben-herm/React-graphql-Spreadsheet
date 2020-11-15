import { useRouter } from "next/router";
import { Flex, Button, Textarea } from "@chakra-ui/core";
import { useState } from "react";
import Error from "../components/errors/Error";
import { useTablesQuery } from "../generated/graphql";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  const [tableId, setTableId] = useState(null);
  const [value, setValue] = useState();
  const { data, loading, error } = useTablesQuery();

  // const {tables} = data
  useEffect(() => {
    if (data) {
      const { tables } = data;
      setTableId(tables[0].table_id);
    }
  }, [data]);
  if (tableId) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display={"flex"}
        m={"auto"}
        mt={"12%"}
      >
        <Textarea
          value={value}
          onChange={() => {}}
          placeholder="Here is a sample placeholder"
          size="sm"
          mb={"10px"}
        />
        <Button onClick={() => router.push(`/${tableId}`)}>
          Move To Spreadsheet
        </Button>
      </Flex>
    );
  }
  return <Error error={error} />;
};

export default Index;
