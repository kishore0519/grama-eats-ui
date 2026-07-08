/**
 *
 * <div id="parent">
 *  <div id="child">
 *   <h1>I'm an h1 tag</h1>
 *   <h2>I'm an h2 tag</h2>
 *  </div>
 *  <div id="child2">
 *   <h1>I'm an h1 tag</h1>
 *   <h2>I'm an h2 tag</h2>
 *  </div>
 * </div>
 *
 */

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
