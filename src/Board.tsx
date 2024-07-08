import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { useState } from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 5px;
`;

const Board = ({ solution }) => {
  const [currentGuess, setCurrentGuess] = useState([]);
  const onTileSelection = (tile: string) => {
    setCurrentGuess([...currentGuess, tile]);
  };

  let tiles = [];
  solution.forEach((k, _) => {
    tiles = tiles.concat(k);
  });

  return (
    <>
      <Grid>
        {tiles.map((t) => (
          <>
            <Tile
              selected={currentGuess.includes(t)}
              phrase={t}
              onTileSelection={onTileSelection}
            />
          </>
        ))}
      </Grid>
    </>
  );
};

export default Board;
