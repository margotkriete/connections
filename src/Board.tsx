import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { useState } from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 5px;
`;

const SubmitButton = styled.button`
  background-color: yellow;
`;

const Board = ({ solution }) => {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const onTileSelection = (tile: string) => {
    if (!currentGuess.includes(tile) && currentGuess.length < 4) {
      setCurrentGuess([...currentGuess, tile]);
    } else {
      setCurrentGuess(currentGuess.filter((t) => t != tile));
    }
  };

  const checkSolution = () => {
    if (solution.includes(currentGuess)) {
      console.log("found solution");
    }
  };

  let tiles: string[] = [];
  solution.forEach((k: string, _) => {
    // TODO: shuffle these
    tiles = tiles.concat(k);
  });

  return (
    <>
      <Grid>
        {tiles.map((t) => (
          <Tile
            selected={currentGuess.includes(t)}
            phrase={t}
            onTileSelection={onTileSelection}
            key={t}
          />
        ))}
        <SubmitButton
          disabled={currentGuess.length < 4}
          onClick={checkSolution}
        >
          Submit
        </SubmitButton>
      </Grid>
    </>
  );
};

export default Board;
