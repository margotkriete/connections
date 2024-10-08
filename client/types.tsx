export interface TileDisplay {
  tile: string;
  engTile: string;
}

export interface BoardProps {
  tiles: Array<TileDisplay>;
}

export interface TileProps {
  phrase: string;
  onClick: (e: any, phrase: string) => void;
  selected: boolean;
  disabled: boolean;
}
