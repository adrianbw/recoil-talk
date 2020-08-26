import * as React from "react";
import { useRecoilValueLoadable } from "recoil";
import { fetchSelectorState } from "./recoil";
import { ListGroup, ListGroupItem, Spinner } from "reactstrap";

export const FetchList: React.FunctionComponent = () => {
  const toDoLoadable = useRecoilValueLoadable(fetchSelectorState);
  return (
    <>
      {toDoLoadable.state === "hasValue" ? (
        <ListGroup>
          {toDoLoadable.contents.map((item) => (
            <ListGroupItem key={item.title}>{item.title}</ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <Spinner animation="border" role="status" />
      )}
    </>
  );
};
