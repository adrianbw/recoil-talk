import * as React from "react";
import { Col } from "reactstrap";

export const WhyRecoil: React.FunctionComponent = () => {
  return (
    <Col sm={6}>
      <h1>Recoil</h1>
      <ul>
        <li>Recoil is a state management library built by Facebook.</li>
        <li>
          Under the hood, it uses the Context API, so you could do something
          similar yourself.
        </li>
        <li>But Recoil has all sorts of cool stuff, like:</li>
        <ul>
          <li>Support for React.Suspense</li>
          <li>Great Async utilities</li>
          <li>Memoized data retrieval</li>
        </ul>
        <li>
          It's also easy to use, because it follows the React.useState model of{" "}
          <code>[state, setState]</code>.{" "}
        </li>
      </ul>
    </Col>
  );
};
