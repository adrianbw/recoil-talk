import * as React from "react";
import { useSetRecoilState } from "recoil";
import { toDoItemState } from "./recoil";
import { Form, FormGroup, Input, Label } from "reactstrap";

export const ToDoSelector: React.FunctionComponent = () => {
  const setToDoItem = useSetRecoilState(toDoItemState);
  return (
    <Form>
      <FormGroup>
        <Label>Select ToDo Item</Label>
        <Input
          type="select"
          name="select"
          onChange={(event) => setToDoItem(event.target.value)}
        >
          <option value="null"></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
    </Form>
  );
};
