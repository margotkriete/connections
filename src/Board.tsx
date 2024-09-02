import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { useState } from "react";
import _ from "lodash";
import { checkGuess } from "./api";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 70px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-gap: 5px;
`;

const SubmitButton = styled.button`
  background-color: yellow;
`;

const GUESS_LENGTH = 4;

const Board = ({ tiles }) => {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [solvedCategories, setSolvedCategories] = useState<string[]>([]);
  const [disabledTiles, setDisabledTiles] = useState<string[]>([]);

  const onTileSelection = (tile: string) => {
    if (!currentGuess.includes(tile) && currentGuess.length < GUESS_LENGTH) {
      setCurrentGuess([...currentGuess, tile]);
    } else {
      setCurrentGuess(currentGuess.filter((t) => t != tile));
    }
  };

  const submitGuess = async () => {
    const resp = await checkGuess({ guess: currentGuess });
    if (resp?.data["correct"]) {
      setSolvedCategories([...solvedCategories, resp?.data["category"]]);
      setDisabledTiles([...disabledTiles, ...currentGuess]);
      setCurrentGuess([]);
      return;
    }
    if (solvedCategories.length == 4) {
      setCurrentGuess([]);
      return;
    }
    setMistakes(mistakes + 1);
  };

  return (
    <>
      <Container>
        <Grid>
          {tiles.map((tile: string, i: number) => (
            <Tile
              selected={currentGuess.includes(tile)}
              phrase={tile}
              onTileSelection={onTileSelection}
              key={i}
              disabled={disabledTiles.includes(tile)}
            />
          ))}
          <SubmitButton
            disabled={currentGuess.length < 4}
            onClick={submitGuess}
          >
            Submit
          </SubmitButton>
        </Grid>
        <p>
          Solved categories: {solvedCategories.join(" ")}
          <br />
          Mistakes: {mistakes}
        </p>
      </Container>
    </>
  );
};

export default Board;
