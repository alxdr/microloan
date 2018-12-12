import React from "react";
import ReactDOM from "react-dom";
import Repayment from "./Repayment";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Repayment handleRepay={() => {}} amount={""} approved={false} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Repayment handleRepay={() => {}} amount={""} approved={true} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
