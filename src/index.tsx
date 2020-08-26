import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import { divOneSelectedState as e1atom } from "./examples/example-1/recoil";
import { divTwoSelectedState as e2atom } from "./examples/example-2/recoil";
import { listState, filterState } from "./examples/example-3/recoil";
import { toDoItemState } from "./examples/example-6/recoil";
import { StoreJournal } from "./recoil-journal/RecoilJournal";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <StoreJournal
          watchAtoms={[e1atom, e2atom, listState, filterState, toDoItemState]}
        />
        <App />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
