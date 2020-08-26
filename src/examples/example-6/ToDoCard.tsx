import * as React from "react";
import { ToDo, parameterizedFetchSelectorState, toDoItemState } from "./recoil";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { useRecoilValue } from "recoil";

export type ToDoCardProps = {
  toDo: ToDo | null;
};

export const ToDoCard: React.FunctionComponent = () => {
  const toDoNumber = useRecoilValue(toDoItemState);
  const toDo = useRecoilValue(parameterizedFetchSelectorState(toDoNumber));
  return <ToDoCardRaw toDo={toDo} />;
};

export const ToDoCardRaw: React.FunctionComponent<ToDoCardProps> = (props) => {
  const { toDo } = props;
  return (
    <>
      {toDo && (
        <Card className="m-auto">
          <CardImg top width="100%" src="https://placekitten.com/400/400" />
          <CardBody>
            <CardTitle>
              <h1>To Do #{toDo.id}</h1>
            </CardTitle>
          </CardBody>
          <CardText>
            <h2>Description</h2>
            {toDo.title}
            <h2>Completed?</h2>
            {toDo.completed ? "Complete" : "Incomplete"}
          </CardText>
        </Card>
      )}
    </>
  );
};
