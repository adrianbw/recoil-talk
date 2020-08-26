import classnames from "classnames";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./rootReducer";
import {
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import { toggleDiv } from "./rtkExample";

export const RTKExample: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { divSelected } = useSelector((state: RootState) => state.toggleDiv);
  return (
    <>
      <h2>
        Using <a href="https://redux-toolkit.js.org">Redux Toolkit</a>
      </h2>
      <Card className="m-auto">
        <CardImg top src="https://placekitten.com/401/401" />
        <CardBody>
          <CardTitle>Example One</CardTitle>
        </CardBody>
        <CardText
          className={classnames("m-2", { "text-primary": divSelected })}
        >
          I'm the text you care about!
        </CardText>
        <Button onClick={() => dispatch(toggleDiv())}>Toggle Div</Button>
      </Card>
    </>
  );
};
