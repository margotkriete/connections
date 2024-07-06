import React from "react";
import styled from "styled-components";
import Tile from "./Tile";
import { useState } from "react";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-gap: 5px;
`;

// hardcoded solution to test
// eventually will pass to props from App, since it never changes
const solution = {
  category1: ["tile1", "tile5", "tile9", "tile8"],
  category2: ["tile2", "tile7", "tile6", "tile16"],
  category3: ["tile3", "tile10", "tile11", "tile12"],
  category4: ["tile4", "tile13", "tile14", "tile15"],
};

const Board = () => {
  // const [remainingMistakes, setRemainingMistakes] = useState(4);
  const [currentGuess, setCurrentGuess] = useState([]);
  return (
    <>
      {/* <div>Remaining mistakes: {remainingMistakes}</div> */}
      <Grid>
        {Object.values(solution).map((t) =>
          t.map((tile) => <Tile phrase={tile} key={tile} />)
        )}
      </Grid>
    </>
  );
};

export default Board;
