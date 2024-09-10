import React from "react";
import { useEffect, useState } from "react";
import Board from "./Board";
import { getGroups } from "./api";
import { TileDisplay } from "./types";

const App = () => {
  const [tiles, setTiles] = useState(Array<TileDisplay>);

  useEffect(() => {
    // TODO: save this in local storage so it persists across page loads
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
      <h1>"connections"</h1>
      <Board tiles={tiles} />
    </>
  );
};

export default App;
