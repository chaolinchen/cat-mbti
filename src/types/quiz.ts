export interface QuizOption {
  value: string;
  label: string;
  score: {
    I?: number;
    E?: number;
    S?: number;
    N?: number;
    T?: number;
    F?: number;
    J?: number;
    P?: number;
  };
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface QuizScores {
  I: number;
  E: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
} 