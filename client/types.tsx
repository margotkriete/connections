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

export interface GuessResponse {
  correct: boolean;
  category?: string;
  error?: boolean;
}

export interface GuessParams {
  guess: Array<string>;
}

export interface GroupsResponse {
  groups: Array<TileDisplay>;
}
