import * as React from "react";
import classnames from "classnames";
import {
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { useRecoilState } from "recoil";
import { divOneSelectedState } from "./recoil";

export const ExampleOne: React.FunctionComponent = () => {
  const [divOneSelected, setDivOneSelected] = useRecoilState(
    divOneSelectedState
  );
  return (
    <Card className="m-auto">
      <CardImg top src="https://placekitten.com/401/401" />
      <CardBody>
        <CardTitle>Example One</CardTitle>
      </CardBody>
      <CardText
        className={classnames("m-2", { "text-primary": divOneSelected })}
      >
        I'm the text you care about!
      </CardText>
      <Button onClick={() => setDivOneSelected(!divOneSelected)}>
        Toggle Div
      </Button>
    </Card>
  );
};
