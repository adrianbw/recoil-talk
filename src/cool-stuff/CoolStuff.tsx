import * as React from "react";
import { Col } from "reactstrap";

export const OtherCoolStuff: React.FunctionComponent = () => {
  return (
    <Col>
      <h2>Other Cool Stuff</h2>
      <h3>
        <a href="https://recoiljs.org/docs/api-reference/utils/atomFamily">
          Atom Families
        </a>{" "}
        (duh duh duh duh *snap* *snap*)
      </h3>
      Parameterized atoms, so you can have a bunch of versions of the same atom.
      <h3>
        <a href="https://recoiljs.org/docs/api-reference/core/Snapshot">
          Snapshots
        </a>
      </h3>
      <p>
        Recoil captures complete snapshots of state, allowing you to do things
        like:
      </p>
      <h4>
        <a href="https://recoiljs.org/docs/api-reference/core/useRecoilTransactionObserver">
          useRecoilTransactionObserver
        </a>
      </h4>
      <p>
        For example, to compare state changes like I've been doing this whole
        time.
      </p>
      <h4>
        <a href="https://recoiljs.org/docs/api-reference/core/useGotoRecoilSnapshot">
          useGoToRecoilSnapshot
        </a>
      </h4>
      <p>To do time traveling.</p>
      <h4>
        <a href="https://recoiljs.org/docs/api-reference/core/useRecoilCallback">
          useRecoilCallback
        </a>
      </h4>
      Use a read-only snapshot of the state at the moment the callback was
      created to do things async.
      <h3>
        <a href="https://recoiljs.org/docs/api-reference/core/useResetRecoilState">
          useResetRecoilState
        </a>
      </h3>
      <p>Return an atom to its default value.</p>
      <h3>Concurrency Helpers</h3>
      <p>
        <code>
          <a href="https://recoiljs.org/docs/api-reference/utils/waitForAll">
            waitForAll()
          </a>
        </code>
        ,{" "}
        <code>
          <a href="https://recoiljs.org/docs/api-reference/utils/waitForAny">
            waitForAny()
          </a>
        </code>
        , and{" "}
        <code>
          <a href="https://recoiljs.org/docs/api-reference/utils/waitForNone">
            waitForNone()
          </a>
        </code>{" "}
        let you build logic around async behaviors in your selectors.
      </p>
    </Col>
  );
};
