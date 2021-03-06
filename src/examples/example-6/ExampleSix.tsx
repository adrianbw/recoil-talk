import * as React from "react";
import { ToDoSelector } from "./ToDoSelector";
import { ToDoCard } from "./ToDoCard";
import { Spinner } from "reactstrap";

const LoadingPlaceholder: React.FunctionComponent = () => (
  <Spinner animation="border" role="status" />
);
export const ExampleSix: React.FunctionComponent = () => {
  return (
    <>
      <h2>Parameterizing Fetch</h2>
      <React.Suspense fallback={<LoadingPlaceholder />}>
        <ToDoSelector />
        <ToDoCard />
      </React.Suspense>
    </>
  );
};
