/**
 * Use a container bound to recoil to pass data into your components
 * This makes testing easier, and allows you to switch data sources more easily
 */
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
import { useRecoilState, SetterOrUpdater } from "recoil";
import { divOneSelectedState } from "./recoil";

export const ExampleOneContainer: React.FunctionComponent = () => {
  const [divOneSelected, setDivOneSelected] = useRecoilState(
    divOneSelectedState
  );
  return (
    <ExampleOne
      divOneSelected={divOneSelected}
      setDivOneSelected={setDivOneSelected}
    />
  );
};

type ExampleOneProps = {
  divOneSelected: boolean;
  setDivOneSelected: SetterOrUpdater<boolean>;
};
export const ExampleOne: React.FunctionComponent<ExampleOneProps> = ({
  divOneSelected,
  setDivOneSelected,
}) => {
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
