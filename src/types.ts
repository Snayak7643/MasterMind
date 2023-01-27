export type StateType = {
  selectedColor: number;
  activeIndex: number;
  answer: number[];
  input: number[];
  isWinner: boolean;
  isOver: boolean;
  gameMatrix: { style: any[]; hint: number[] }[];
};

export type ActionType = {
  type: string;
  payload: any;
};
