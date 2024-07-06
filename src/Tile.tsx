import React from "react";
import { useState } from "react";
import styled from "styled-components";

interface TileProps {
  phrase: string;
  handleSelectedTile: () => {};
}

const TileButton = styled.button`
  background-color: aqua;
`;

const Tile = ({ phrase }: TileProps) => {
  function handleSelected() {
    setSelected(!selected);

    // TODO: add tile to potential solution, which will need to live
    // in Board state
  }

  const [selected, setSelected] = useState(false);

  return <TileButton onClick={handleSelected}>{phrase}</TileButton>;
};

export default Tile;
