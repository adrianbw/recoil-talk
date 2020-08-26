import * as React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { ExampleButton } from "./ExampleButton";
import { ExampleText } from "./ExampleText";

export const ExampleTwo: React.FunctionComponent = () => {
  return (
    <Card className="m-auto">
      <CardImg top width="100%" src="https://placekitten.com/400/400" />
      <CardBody>
        <CardTitle>Example Two</CardTitle>
      </CardBody>
      <ExampleText />
      <ExampleButton />
    </Card>
  );
};
