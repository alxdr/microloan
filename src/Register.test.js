import React from "react";
import ReactDOM from "react-dom";
import Register from "./Register";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Register
      handleChange={() => () => {}}
      handleLogin={() => {}}
      email=""
      password=""
      handleMessage={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
