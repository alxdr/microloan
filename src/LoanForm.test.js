import React from "react";
import ReactDOM from "react-dom";
import LoanForm from "./LoanForm";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <LoanForm
      handleChange={() => () => {}}
      amount=""
      term={0}
      name=""
      email=""
      id=""
      phone=""
      approved={false}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <LoanForm
      handleChange={() => () => {}}
      amount=""
      term={0}
      name=""
      email=""
      id=""
      phone=""
      approved={true}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
