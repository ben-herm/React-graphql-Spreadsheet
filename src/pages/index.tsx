import { useRouter } from "next/router";
import { Flex, Text, Input, Button, Box } from "@chakra-ui/core";

const Index = () => {
  const router = useRouter();
  return (
    <Flex justifyContent='center' alignItems='center' display={'flex'} m={'auto'} mt={'12%'}>
      <Button onClick={() => router.push("/table")}>Move To Spreadsheet</Button>
    </Flex>
  );
};

export default Index;
