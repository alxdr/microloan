import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Message message="" handleClose={() => {}} open={false} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
