import * as React from "react";
import { Button, Spinner } from "reactstrap";
import { FetchList } from "./FetchList";

const LoadingPlaceholder: React.FunctionComponent = () => (
  <Spinner animation="border" role="status" />
);

export const ExampleFour: React.FunctionComponent = () => {
  const [fetchList, setFetchList] = React.useState(false);
  return (
    <>
      <h2>Fetching Data with Suspense</h2>
      <React.Suspense fallback={<LoadingPlaceholder />}>
        <Button onClick={() => setFetchList(true)}>Fetch List</Button>
        {fetchList && <FetchList />}
      </React.Suspense>
    </>
  );
};
