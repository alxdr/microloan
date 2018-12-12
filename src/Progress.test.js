import React from "react";
import ReactDOM from "react-dom";
import Progress from "./Progress";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Progress handleSubmit={() => {}} loading={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Progress handleSubmit={() => {}} loading={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
