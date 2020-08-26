import * as React from "react";
import { useSetRecoilState } from "recoil";
import { filterState } from "./recoil";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

export const ExampleInput: React.FunctionComponent = () => {
  const setFilter = useSetRecoilState(filterState);
  return (
    <InputGroup className="my-4">
      <InputGroupAddon addonType="prepend">
        <InputGroupText>Type of Cat</InputGroupText>
      </InputGroupAddon>
      <Input
        placeholder="😻"
        onChange={(event) => setFilter(event.target.value)}
      />
    </InputGroup>
  );
};
