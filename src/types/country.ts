export interface Country {
  name: string;
  flag: string;
  population: number;
  capital: string;
  mainExport: string;
}

export interface Clue {
  type: 'flag' | 'population' | 'capital' | 'export';
  revealed: boolean;
  points: number;
}

export interface GameStats {
  attempts: number;
  score: number;
  cluesRevealed: number;
  won: boolean;
}