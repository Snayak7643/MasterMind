import { ActionType, StateType } from "../types";
import { actionNames, COLORS } from "../constants";
import { generateAnswer, generateN, getOutput } from "../Utils/functions";

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
