import * as React from "react";
import { Button } from "reactstrap";
import { FetchList } from "./FetchList";

export const ExampleFive: React.FunctionComponent = () => {
  const [fetchList, setFetchList] = React.useState(false);
  return (
    <>
      <Button onClick={() => setFetchList(true)}>Fetch List</Button>
      {fetchList && <FetchList />}
    </>
  );
};
