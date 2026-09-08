// By using React
// const heading = React.createElement("h1", { id: "heading" }, "Hello, React! from React by using CDN");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// nested elements
// <div id="parent">
// <div id="child1">
// h1>Hello, React! from React by using CDN</h1>
// </div>
// <div id="child2">
// h1>Hello, React! from React by using CDN</h1>
// </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      {},
      "Hello, h1! from React by using Parent to child1 element",
    ),
    React.createElement(
      "h2",
      {},
      "Hello, h2! from React by using Parent to child element",
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      {},
      "Hello, h1! from React by using Parent to child2 element",
    ),
    React.createElement(
      "h2",
      {},
      "Hello, h2! from React by using Parent to child element",
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
