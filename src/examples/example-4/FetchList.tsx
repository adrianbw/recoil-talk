import * as React from "react";
import { useRecoilValue } from "recoil";
import { fetchSelectorState } from "./recoil";
import { ListGroup, ListGroupItem } from "reactstrap";

export const FetchList: React.FunctionComponent = () => {
  const toDos = useRecoilValue(fetchSelectorState);
  return (
    <ListGroup>
      {toDos.map((item) => (
        <ListGroupItem key={item.title}>{item.title}</ListGroupItem>
      ))}
    </ListGroup>
  );
};
