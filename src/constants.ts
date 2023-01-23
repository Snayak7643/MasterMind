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

const GUESSES: number[] = [];
for (var i = 0; i < constraints.NO_OF_GUESSES; i++) {
  GUESSES.push(i);
}

const NO_OF_CHANCES: number[] = [];
for (i = 0; i < constraints.NO_OF_CHANCES; i++) {
  NO_OF_CHANCES.push(i);
}

export { COLORS, GUESSES, NO_OF_CHANCES };

const styles: { backgroundColor: string }[][] = [];
const output: number[][] = [];

for (i = 0; i < constraints.NO_OF_CHANCES; i++) {
  const style: { backgroundColor: string }[] = [];
  const output_row: number[] = [];
  for (var j = 0; j < constraints.NO_OF_GUESSES; j++) {
    style.push({ backgroundColor: "white" });
    output_row.push(0);
  }
  styles.push(style);
  output.push(output_row);
}

const input: number[] = [];

for (i = 0; i < constraints.NO_OF_GUESSES; i++) {
  input.push(7);
}

export type StateType = {
  selectedColor: number;
  activeIndex: number;
  styles: { backgroundColor: string }[][];
  input: number[];
  output: number[][];
};

export const INITIAL_STATE: StateType = {
  selectedColor: 0,
  activeIndex: 0,
  styles: styles,
  input: input,
  output: output,
};

export type ActionType = {
  type: string;
  payload: any;
};
