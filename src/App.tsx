import React from "react";
import Board from "./Board";

const App = () => {
  const solution = new Map();
  solution.set("category1", ["tile1", "tile5", "tile9", "tile8"]);
  solution.set("category2", ["tile2", "tile7", "tile6", "tile16"]);
  solution.set("category3", ["tile3", "tile10", "tile11", "tile12"]);
  solution.set("category4", ["tile4", "tile13", "tile14", "tile15"]);

  return (
    <>
      <h1>andiamo!</h1>
      <Board solution={solution} />
    </>
  );
};

export default App;
