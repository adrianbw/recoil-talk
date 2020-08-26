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
          <CardImg
            top
            width="100%"
            src={`https://placekitten.com/40${toDo.id}/40${toDo.id}`}
          />
          <CardBody>
            <CardTitle>
              <h3>To Do #{toDo.id}</h3>
            </CardTitle>
          </CardBody>
          <CardText>
            <span className="h4">Description</span>
            {toDo.title}
            <span className="h4">Completed?</span>
            {toDo.completed ? "Complete" : "Incomplete"}
          </CardText>
        </Card>
      )}
    </>
  );
};
