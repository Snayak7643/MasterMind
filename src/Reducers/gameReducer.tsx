import { ActionType, StateType } from "../types";
import { actionNames, COLORS } from "../constants";
import {
  generateAnswer,
  generateN,
  getOutput,
  getResult,
  generateStyles,
  generateOutput,
} from "../Utils/functions";
import { constraints } from "../constants";

const gameReducer = (state: StateType, action: ActionType) => {
  const { colorIndex, index } = action.payload;
  const { activeIndex, styles, input, selectedColor, output } = state;

  switch (action.type) {
    case actionNames.NEW_GAME: {
      return {
        ...state,
        selectedColor: 0,
        activeIndex: 0,
        styles: generateStyles(
          constraints.NO_OF_CHANCES,
          constraints.NO_OF_GUESSES
        ),
        input: generateN(constraints.NO_OF_GUESSES, 7),
        answer: generateAnswer(input.length),
        output: generateOutput(
          constraints.NO_OF_CHANCES,
          constraints.NO_OF_GUESSES,
          0
        ),
        isWinner: false,
        isOver: false,
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
