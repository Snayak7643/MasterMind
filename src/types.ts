export type StateType = {
  selectedColor: number;
  activeIndex: number;
  styles: { backgroundColor: string }[][];
  input: number[];
  output: number[][];
};

export type ActionType = {
  type: string;
  payload: any;
};
