import { ActionType, StateType } from "../types";
import { COLORS } from "../constants";

const ans = [3, 5, 3, 3];

const checkResult = (input: number[]) => {
  let output: number[] = [],
    i: number = 0;
  for (i = 0; i < input.length; i++) {
    output.push(-1);
  }
  const answerMap = new Map();
  for (i = 0; i < ans.length; i++) {
    let f: any = 0;
    if (answerMap.get(ans[i]) !== undefined) {
      f = answerMap.get(ans[i]);
    }
    answerMap.set(ans[i], f + 1);
  }
  i = 0;

  input.forEach((colorIndex) => {
    if (answerMap.has(colorIndex) && answerMap.get(colorIndex) > 0) {
      answerMap.set(colorIndex, answerMap.get(colorIndex) - 1);
      output[i] = 0;
      i++;
    }
  });
  i = 0;
  input.forEach((colorIndex, index) => {
    if (colorIndex === ans[index]) {
      output[i] = 1;
      i++;
    }
  });
  console.log(output);
  return output;
};

const gameReducer = (state: StateType, action: ActionType) => {
  console.log(state);
  switch (action.type) {
    case "selectColor": {
      return {
        ...state,
        selectedColor: action.payload.colorIndex,
      };
    }

    case "setColor": {
      let newStyles = state.styles;
      newStyles[state.activeIndex][action.payload.index] = {
        backgroundColor: COLORS[state.selectedColor],
      };
      let newInput = state.input;
      newInput[action.payload.index] = state.selectedColor;
      return {
        ...state,
        styles: newStyles,
        input: newInput,
      };
    }
    case "submit": {
      const newOutput = state.output;
      newOutput[state.activeIndex] = checkResult(state.input);
      return {
        ...state,
        activeIndex: state.activeIndex + 1,
        input: [7, 7, 7, 7],
        output: newOutput,
      };
    }
    default: {
      return state;
    }
  }
};

export default gameReducer;
