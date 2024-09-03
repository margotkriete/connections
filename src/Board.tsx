import React from "react";
import Tile from "./Tile";
import { useState } from "react";
import _ from "lodash";
import { checkGuess } from "./api";

const Board = ({ tiles }) => {
  const [currentGuess, setCurrentGuess] = useState<string[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [solvedCategories, setSolvedCategories] = useState<string[]>([]);
  const [disabledTiles, setDisabledTiles] = useState<string[]>([]);

  const onTileSelection = (tile: string) => {
    if (!currentGuess.includes(tile) && currentGuess.length < 4) {
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
    setCurrentGuess([]);
    if (solvedCategories.length == 4) {
      return;
    }
    setMistakes(mistakes + 1);
  };

  return (
    <>
      {solvedCategories.length === 4 ? (
        <p>you win!</p>
      ) : (
        <>
          <div className="grid-container">
            <div className="board">
              {tiles.map((tile: string, i: number) => (
                <Tile
                  selected={currentGuess.includes(tile)}
                  phrase={tile}
                  onTileSelection={onTileSelection}
                  key={i}
                  disabled={disabledTiles.includes(tile)}
                />
              ))}
              <button
                className="button--submit"
                disabled={currentGuess.length < 4}
                onClick={submitGuess}
              >
                Submit
              </button>
            </div>
            <p>
              Solved categories: <br />
              {solvedCategories.join(" ")}
              <br />
              <br />
              Mistakes: {mistakes}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Board;
