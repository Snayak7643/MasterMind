import { StateType } from "./types";
import {
  fillArrayWithGivenValue,
  fillArrayFromZeroToN,
  fillMatrixWithStyleAndHints,
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

export enum SELECTED_COLOR {
  YELLOW,
  GREEN,
  LIGHT_BLUE,
  PINK,
  BLUE,
  RED,
  WHITE = 100,
}

export enum MATCH {
  NO = -1,
  PARTIAL,
  FULL,
}

export const GUESSES: number[] = fillArrayFromZeroToN(
  constraints.NO_OF_GUESSES
);
export const NO_OF_CHANCES: number[] = fillArrayFromZeroToN(
  constraints.NO_OF_CHANCES
);

export const INITIAL_STATE: StateType = {
  selectedColor: SELECTED_COLOR.YELLOW,
  activeIndex: 0,
  input: fillArrayWithGivenValue(
    constraints.NO_OF_GUESSES,
    SELECTED_COLOR.WHITE
  ),
  answer: [],
  isWinner: false,
  isOver: false,
  gameMatrix: fillMatrixWithStyleAndHints(
    constraints.NO_OF_CHANCES,
    constraints.NO_OF_GUESSES
  ),
};

export const actionNames = {
  NEW_GAME: "newGame",
  SELECT_COLOR: "selectColor",
  SET_COLOR: "setColor",
  SUBMIT: "submit",
};
