import { ActionType, StateType } from "../types";
import { actionNames, COLORS, INITIAL_STATE } from "../constants";
import { cloneDeep } from "lodash";
import {
  generateAnswer,
  generateN,
  getOutput,
  getResult,
} from "../Utils/functions";

const gameReducer = (state: StateType, action: ActionType) => {
  const { colorIndex, index } = action.payload;
  const { activeIndex, styles, input, selectedColor, output } = state;

  switch (action.type) {
    case actionNames.NEW_GAME: {
      return {
        ...INITIAL_STATE,
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
      let newStyles = cloneDeep(styles);
      newStyles[activeIndex][index] = {
        backgroundColor: COLORS[selectedColor],
      };
      let newInput = [...input];
      newInput[index] = selectedColor;
      return {
        ...state,
        styles: newStyles,
        input: newInput,
      };
    }

    case actionNames.SUBMIT: {
      const newOutput = cloneDeep(output);
      newOutput[activeIndex] = getOutput(input, state.answer);
      const { isWinner, isOver } = getResult(
        newOutput[activeIndex],
        activeIndex
      );
      return {
        ...state,
        activeIndex: activeIndex + 1,
        input: generateN(input.length, 7),
        output: newOutput,
        isWinner,
        isOver,
      };
    }

    default: {
      return state;
    }
  }
};

export default gameReducer;
