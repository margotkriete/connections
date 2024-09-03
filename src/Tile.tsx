import React from "react";

interface TileProps {
  phrase: string;
  onTileSelection: (phrase: string) => void;
  selected: boolean;
  disabled: boolean;
}

const Tile = ({ phrase, onTileSelection, selected, disabled }: TileProps) => {
  return (
    <button
      className={selected ? "tile--selected" : "tile"}
      disabled={disabled}
      onClick={() => onTileSelection(phrase)}
    >
      {phrase}
    </button>
  );
};

export default Tile;
