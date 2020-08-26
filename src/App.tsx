import React, { useState } from "react";
import classnames from "classnames";
import {
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Col,
} from "reactstrap";
import { ExampleOne } from "./examples/example-1";
import { ExampleTwo } from "./examples/example-2";
import { ExampleThree } from "./examples/example-3";
import { ExampleFour } from "./examples/example-4";
import { ExampleFive } from "./examples/example-5";
import { ExampleSix } from "./examples/example-6";
import "./App.css";
import { WhyRecoil } from "./recoil";
import { RTKExample } from "./redux/RTK";
import { OtherCoolStuff } from "./cool-stuff/CoolStuff";

function App() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="d-flex flex-column p-4" style={{ height: "100vh" }}>
      <h1 className="sr-only">Recoil</h1>
      <Row>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Why Recoil?
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Example One
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Example Two
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Example Three
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              Example Four
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "6" })}
              onClick={() => {
                toggle("6");
              }}
            >
              Example Five
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "7" })}
              onClick={() => {
                toggle("7");
              }}
            >
              Example Six
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "8" })}
              onClick={() => {
                toggle("8");
              }}
            >
              Redux Toolkit{" "}
              <span role="img" aria-label="a nauseated face">
                🤢
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "9" })}
              onClick={() => {
                toggle("9");
              }}
            >
              Other Cool Stuff
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
      <Row>
        <TabContent activeTab={activeTab} className="w-75">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <WhyRecoil />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <ExampleOne />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <ExampleTwo />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
                <ExampleThree />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
                <ExampleFour />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="12">
                <ExampleFive />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col sm="12">
                <ExampleSix />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="8">
            <Row>
              <Col sm="12">
                <RTKExample />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="9">
            <Row>
              <Col sm="12">
                <OtherCoolStuff />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Row>
      <Row className="mt-auto">
        <Col>
          <p>
            Adrian Bettridge-Wiese{" "}
            <a href="https://twitter.com/lucidiguana">@lucidiguana</a>
          </p>
          <p>
            <a href="https://github.com/adrianbw/recoil-talk">
              https://github.com/adrianbw/recoil-talk
            </a>
          </p>
          <p>
            <a href="https://recoiljs.org/">Recoil.js</a>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
