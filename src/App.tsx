import React from "react";
import { useEffect, useState } from "react";
import Board from "./Board";
import { getGroups } from './api';

const App = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // TODO: save this in local storage so it persists across page loads
    const fetchData = async () => {
      const resp = await getGroups();
      if (resp?.data) {
        setTiles(resp.data);
      }}

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
