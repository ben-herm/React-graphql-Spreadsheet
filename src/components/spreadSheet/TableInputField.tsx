import { Input } from "@chakra-ui/core";
import React from "react";
import { InputType } from "zlib";

interface TableInputFieldProps {}

export const TableInputField: React.FC<TableInputFieldProps> = ({}) => {
  const RangeView = ({ cell, getValue }): React.ReactElement<InputType> => (
    <Input
      type="text"
      value={getValue({ data: cell })}
      isDisabled
      style={{ pointerEvents: "none" }}
    />
  );
  return <div></div>;
};
