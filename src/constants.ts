import { StateType } from "./types";
import {
  generateN,
  generateOneToN,
  generateOutput,
  generateStyles,
} from "./Utils/functions";

export const constraints = {
  NO_OF_COLORS: 6,
  NO_OF_CHANCES: 10,
  NO_OF_GUESSES: 4,
};

export const COLORS = [
  "gold",
  "yellowgreen",
  "aqua",
  "pink",
  "royalblue",
  "orangered",
];
export const GUESSES: number[] = generateOneToN(constraints.NO_OF_GUESSES);
export const NO_OF_CHANCES: number[] = generateOneToN(
  constraints.NO_OF_CHANCES
);

export const INITIAL_STATE: StateType = {
  selectedColor: 0,
  activeIndex: 0,
  styles: generateStyles(constraints.NO_OF_CHANCES, constraints.NO_OF_GUESSES),
  input: generateN(constraints.NO_OF_GUESSES, 7),
  answer: [],
  output: generateOutput(
    constraints.NO_OF_CHANCES,
    constraints.NO_OF_GUESSES,
    0
  ),
  isWinner: false,
  isOver: false,
};

export const actionNames = {
  NEW_GAME: "newGame",
  SELECT_COLOR: "selectColor",
  SET_COLOR: "setColor",
  SUBMIT: "submit",
};
