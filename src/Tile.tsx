import React from "react";
import styled from "styled-components";

interface TileProps {
  phrase: string;
  onTileSelection: () => void;
}

const TileButton = styled.button<{ $selected?: boolean }>`
  background-color: ${(props) => (props.$selected ? "aqua" : "white")};
`;

const Tile = ({ phrase, onTileSelection, selected }) => {
  return (
    <TileButton $selected={selected} onClick={() => onTileSelection(phrase)}>
      {phrase}
    </TileButton>
  );
};

export default Tile;
