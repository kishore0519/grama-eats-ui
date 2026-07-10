import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "heading" },
    React.createElement("h1", {}, "Hello, Welcome to Grama Eats!"),
  ),
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(reactElement);
