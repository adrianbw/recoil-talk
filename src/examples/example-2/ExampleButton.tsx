import * as React from "react";
import { useRecoilState } from "recoil";
import { divTwoSelectedState } from "./recoil";
import { Button } from "reactstrap";

export const ExampleButton: React.FunctionComponent = () => {
  const [divSelected, setDivSelected] = useRecoilState(divTwoSelectedState);
  return (
    <Button onClick={() => setDivSelected(!divSelected)}>Toggle Div</Button>
  );
};
