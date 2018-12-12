import React from "react";
import ReactDOM from "react-dom";
import Account from "./Account";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Account amount="" term={0} interest={1} approved={false} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Account amount="" term={0} interest={1} approved={true} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
