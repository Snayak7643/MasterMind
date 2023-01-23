import { ActionType, StateType } from "../types";
import { actionNames, COLORS } from "../constants";
import { generateAnswer, generateN } from "../Utils/functions";

const getOutput = (input: number[], answer: number[]) => {
  let output: number[] = [],
    i: number = 0;
  for (i = 0; i < input.length; i++) {
    output.push(-1);
  }
  const answerMap = new Map();
  for (i = 0; i < answer.length; i++) {
    let f: any = 0;
    if (answerMap.get(answer[i]) !== undefined) {
      f = answerMap.get(answer[i]);
    }
    answerMap.set(answer[i], f + 1);
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
    if (colorIndex === answer[index]) {
      output[i] = 1;
      i++;
    }
  });
  console.log(output);
  return output;
};

const gameReducer = (state: StateType, action: ActionType) => {
  const { colorIndex, index } = action.payload;
  const { activeIndex, styles, input, selectedColor, output } = state;

  switch (action.type) {
    case actionNames.NEW_GAME: {
      return {
        ...state,
        answer: generateAnswer(input.length),
      };
    }

    case actionNames.SELECT_COLOR: {
      return {
        ...state,
        selectedColor: colorIndex,
      };
    }

    case actionNames.SET_COLOR: {
      let newStyles = styles;
      newStyles[activeIndex][index] = {
        backgroundColor: COLORS[selectedColor],
      };
      let newInput = input;
      newInput[index] = selectedColor;
      return {
        ...state,
        styles: newStyles,
        input: newInput,
      };
    }

    case actionNames.SUBMIT: {
      const newOutput = output;
      newOutput[activeIndex] = getOutput(input, state.answer);
      return {
        ...state,
        activeIndex: activeIndex + 1,
        input: generateN(input.length, 7),
        output: newOutput,
      };
    }

    default: {
      return state;
    }
  }
};

export default gameReducer;
