import React from "react";
import { TileProps } from "./types";

const Tile = ({ phrase, onClick, selected, disabled }: TileProps) => {
  return (
    <button
      className={selected ? "tile--selected" : "tile"}
      disabled={disabled}
      onClick={(e) => onClick(e, phrase)}
    >
      {phrase}
    </button>
  );
};

export default Tile;
