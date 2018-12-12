import React from "react";
import ReactDOM from "react-dom";
import AppBar from "./AppBar";

// Smoke testing
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppBar handleRoute={() => {}} loggedIn={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AppBar handleRoute={() => {}} loggedIn={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
