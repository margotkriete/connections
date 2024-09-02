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
  const [showSolvedModal, setShowSolvedModal] = useState(false);

  const onTileSelection = (tile: string) => {
    if (!currentGuess.includes(tile) && currentGuess.length < GUESS_LENGTH) {
      setCurrentGuess([...currentGuess, tile]);
    } else {
      setCurrentGuess(currentGuess.filter((t) => t != tile));
    }
  };

  const submitGuess = async () => {
    let updated = false;
    const resp = await checkGuess({ guess: currentGuess });
    if (resp?.data["correct"]) {
      setSolvedCategories([...solvedCategories, resp?.data["category"]]);
      updated = true;
      setCurrentGuess([]);
      return;
    }
    if (solvedCategories.length == 4) {
      setShowSolvedModal(true);
    }
    setCurrentGuess([]);
    if (!updated) {
      setMistakes(mistakes + 1);
    } else {
      return;
    }
  };

  return (
    <>
      {/* {showSolvedModal && <>todo: fill this in with solution</>} */}
      <Container>
        <Grid>
          {tiles.map((tile: string, i: number) => (
            <Tile
              selected={currentGuess.includes(tile)}
              phrase={tile}
              onTileSelection={onTileSelection}
              key={i}
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
