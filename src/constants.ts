import { StateType } from "./types";
import {
  generateOneToN,
  generateOutput,
  generateStyles,
} from "./Utils/functions";

const constraints = {
  NO_OF_COLORS: 6,
  NO_OF_CHANCES: 10,
  NO_OF_GUESSES: 4,
};

const COLORS = [
  "gold",
  "yellowgreen",
  "aqua",
  "pink",
  "royalblue",
  "orangered",
];
const GUESSES: number[] = generateOneToN(constraints.NO_OF_GUESSES);
const NO_OF_CHANCES: number[] = generateOneToN(constraints.NO_OF_CHANCES);

export { COLORS, GUESSES, NO_OF_CHANCES };

export const INITIAL_STATE: StateType = {
  selectedColor: 0,
  activeIndex: 0,
  styles: generateStyles(constraints.NO_OF_CHANCES, constraints.NO_OF_GUESSES),
  input: Array(constraints.NO_OF_GUESSES).fill(7),
  output: generateOutput(
    constraints.NO_OF_CHANCES,
    constraints.NO_OF_GUESSES,
    0
  ),
};
