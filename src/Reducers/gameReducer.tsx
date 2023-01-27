import { ActionType, StateType } from "../types";
import { actionNames, COLORS, INITIAL_STATE } from "../constants";
import { cloneDeep } from "lodash";
import {
  generateAnswer,
  matchGuessWithAnswer,
  checkWinnerOrOver,
} from "../Utils/functions";

const gameReducer = (state: StateType, action: ActionType) => {
  const { colorIndex, index } = action.payload;
  const { activeIndex, input, selectedColor } = state;

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
      let newInput = [...input];
      newInput[index] = selectedColor;

      let newGameMatrix = cloneDeep(state.gameMatrix);
      newGameMatrix[activeIndex].style[index] = {
        backgroundColor: COLORS[selectedColor],
      };

      return {
        ...state,
        input: newInput,
        gameMatrix: newGameMatrix,
      };
    }

    case actionNames.SUBMIT: {
      const newGameMatrix = cloneDeep(state.gameMatrix);
      newGameMatrix[activeIndex].hint = matchGuessWithAnswer(
        input,
        state.answer
      );
      const { isWinner, isOver } = checkWinnerOrOver(
        newGameMatrix[activeIndex].hint,
        activeIndex
      );
      return {
        ...state,
        activeIndex: activeIndex + 1,
        input: INITIAL_STATE.input,
        gameMatrix: newGameMatrix,
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
