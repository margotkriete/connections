import React from "react";
import Tile from "./Tile";
import { useState } from "react";
import _ from "lodash";
import { checkGuess } from "./api";
import { BoardProps, TileDisplay } from "./types";

const Board = ({ tiles }: BoardProps) => {
  const [currentGuess, setCurrentGuess] = useState<Array<string>>([]);
  const [mistakes, setMistakes] = useState(0);
  const [solvedCategories, setSolvedCategories] = useState<Array<string>>([]);
  const [disabledTiles, setDisabledTiles] = useState<Array<string>>([]);
  const [toggledTiles, setToggledTiles] = useState<Array<string>>([]);

  const handleTileSelect = (e: any, tile: string) => {
    if (e.metaKey) {
      if (toggledTiles.includes(tile)) {
        setToggledTiles(toggledTiles.filter((t) => t != tile));
      } else {
        setToggledTiles([...toggledTiles, tile]);
      }
    } else {
      if (!currentGuess.includes(tile) && currentGuess.length < 4) {
        setCurrentGuess([...currentGuess, tile]);
      } else {
        setCurrentGuess(currentGuess.filter((t) => t != tile));
      }
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
              {tiles.map((t: TileDisplay, i: number) => (
                <Tile
                  selected={currentGuess.includes(t.tile)}
                  phrase={toggledTiles.includes(t.tile) ? t.engTile : t.tile}
                  onClick={(e) => handleTileSelect(e, t.tile)}
                  key={i}
                  disabled={disabledTiles.includes(t.tile)}
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
