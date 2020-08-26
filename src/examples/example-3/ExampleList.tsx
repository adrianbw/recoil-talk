import * as React from "react";
import { useRecoilValue } from "recoil";
import { filteredListState } from "./recoil";
import { ListGroup, ListGroupItem } from "reactstrap";

export const ExampleList: React.FunctionComponent = () => {
  const filteredList = useRecoilValue(filteredListState);
  return (
    <ListGroup>
      {filteredList.map((item) => (
        <ListGroupItem key={item}>{item}</ListGroupItem>
      ))}
    </ListGroup>
  );
};
