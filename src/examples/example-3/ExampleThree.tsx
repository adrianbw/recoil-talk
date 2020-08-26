import * as React from "react";
import { ExampleInput } from "./ExampleInput";
import { ExampleList } from "./ExampleList";

export const ExampleThree: React.FunctionComponent = () => {
  return (
    <>
      <h2>Using Selector to Compose State</h2>
      <ExampleInput />
      <ExampleList />
    </>
  );
};
