import React from "react";
import ReactDOM from "react-dom";
import Loan from "./Loan";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Loan
      handleChange={() => () => {}}
      handleSubmit={() => {}}
      amount=""
      term={0}
      name=""
      email=""
      id=""
      phone=""
      approved={false}
      loading={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Loan
      handleChange={() => () => {}}
      handleSubmit={() => {}}
      amount=""
      term={0}
      name=""
      email=""
      id=""
      phone=""
      approved={true}
      loading={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Loan
      handleChange={() => () => {}}
      handleSubmit={() => {}}
      amount=""
      term={0}
      name=""
      email=""
      id=""
      phone=""
      approved={false}
      loading={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Loan
      handleChange={() => () => {}}
      handleSubmit={() => {}}
      amount=""
      term={0}
      name=""
      email=""
      id=""
      phone=""
      approved={true}
      loading={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
