import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent", key: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement(
      "h1",
      {key: "h1-child1"},
      "Hello, h1! from React by using Parent to child1 element",
    ),
    React.createElement(
      "h2",
      {key: "h2-child1"},
      "Hello, h2! from React by using Parent to child element",
    ),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement(
      "h1",
      {key: "h1-child2"},
      "Hello, h1! from React by using Parent to child2 element",
    ),
    React.createElement(
      "h2",
      {key: "h2-child2"},
      "Hello, h2! from React by using Parent to child element",
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
