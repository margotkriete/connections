import React from "react";
import { useEffect, useState } from "react";
import Board from "./Board";

const App = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/groups")
      .then((response) => response.json())
      .then((data) => setTiles(data));
  }, []);

  return (
    <>
      <h1>"connections"</h1>
      <Board tiles={tiles} />
    </>
  );
};

export default App;
