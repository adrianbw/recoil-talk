import * as React from "react";
import { useRecoilValue } from "recoil";
import { filteredListState } from "./recoil";
import { ListGroup, ListGroupItem } from "reactstrap";

export const ExampleList: React.FunctionComponent = () => {
  const list = useRecoilValue(filteredListState);
  return (
    <ListGroup>
      {list.map((item) => (
        <ListGroupItem key={item}>{item}</ListGroupItem>
      ))}
    </ListGroup>
  );
};
