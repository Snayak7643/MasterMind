export const COLORS = [
  "gold",
  "yellowgreen",
  "aqua",
  "pink",
  "royalblue",
  "orangered",
];

export const INPUT_SECTIONS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export type StateType = {
  selectedColor: number;
  styles: { backgroundColor: string }[];
};

export const INITIAL_STATE: StateType = {
  selectedColor: 7,
  styles: [
    { backgroundColor: "white" },
    { backgroundColor: "white" },
    { backgroundColor: "white" },
    { backgroundColor: "white" },
  ],
};

export type ActionType = {
  type: string;
  payload: any;
};
