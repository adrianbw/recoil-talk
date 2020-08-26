import * as React from "react";
import classnames from "classnames";
import { useRecoilValue } from "recoil";
import { divTwoSelectedState } from "./recoil";
import { CardText } from "reactstrap";

export const ExampleText: React.FunctionComponent = () => {
  const divSelected = useRecoilValue(divTwoSelectedState);
  return (
    <CardText className={classnames("m-2", { "text-primary": divSelected })}>
      I'm the text you care about!
    </CardText>
  );
};
