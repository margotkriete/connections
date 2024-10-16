import React, { useEffect, useState } from "react";
import Board from "./Board";
import { getGroups } from "../api";
import { TileDisplay } from "../types";

const App = () => {
  const [tiles, setTiles] = useState(Array<TileDisplay>);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getGroups();
      if (resp?.data) {
        setTiles(resp.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>connessioni</h1>
      <p>
        guess the four groups of four Italian categories (synonyms). select
        command + click to flip to the English word.
      </p>
      <Board tiles={tiles} />
    </>
  );
};

export default App;
