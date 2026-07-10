import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <div>
      <h1 id="title">Hello, Welcome to Grama Eats!</h1>
    </div>
  );
};

// Create a Functional Heading Component
const Heading = () => {
  return (
    <div id="container">
      <Title />
      <h1 id="heading">This is Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Heading />
  </>,
);
