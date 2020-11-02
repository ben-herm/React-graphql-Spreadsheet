import { Flex, Text } from "@chakra-ui/core";
import { error } from "console";
import React from "react";

interface ErrorProps {
  error: { message: string };
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <Flex align="center" mr={"auto"}>
      <Text flex={1} mt={4} m="auto">
        {"The Query has failed"}
      </Text>
      <Text>{error?.message}</Text>
    </Flex>
  );
};

export default Error;
