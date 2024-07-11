import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { useState } from "react";
import _ from "lodash";

const Container = styled.div`
  display: grid;
  grid-template-columns: 450px 200px;
  grid-gap: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 5px;
`;

const SubmitButton = styled.button`
  background-color: yellow;
`;

const GUESS_LENGTH = 4;

const Board = ({ solution }) => {
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

  const checkGuess = () => {
    let updated = false;
    for (let [k, v] of solution) {
      if (_.isEqual(v, currentGuess)) {
        setSolvedCategories([...solvedCategories, k]);
        setCurrentGuess([]);
        updated = true;
        break;
      }
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

  let tiles: string[] = [];
  solution.forEach((k: string, _) => {
    // TODO: shuffle these
    tiles = tiles.concat(k);
  });

  return (
    <>
      {/* {showSolvedModal && <>todo: fill this in with solution</>} */}
      <Container>
        <Grid>
          {tiles.map((t) => (
            <Tile
              selected={currentGuess.includes(t)}
              phrase={t}
              onTileSelection={onTileSelection}
              key={t}
            />
          ))}
          <SubmitButton disabled={currentGuess.length < 4} onClick={checkGuess}>
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
