// every React component is a JavaScript function that may contain
// markup to render HTML in the browser
import React from "react";
import Board from "./Board";

const App = () => {
  return (
    <>
      <h1>andiamo!</h1>
      <Board />
    </>
  );
};

export default App;
