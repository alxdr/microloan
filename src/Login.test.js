import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Login
      handleChange={() => () => {}}
      handleRoute={() => {}}
      handleLogin={() => {}}
      email=""
      password=""
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
