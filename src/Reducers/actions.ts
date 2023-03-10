import { actionNames } from "../constants";

export const newGame = () => {
  return { type: actionNames.NEW_GAME, payload: {} };
};

export const selectColor = (colorIndex: number) => {
  return { type: actionNames.SELECT_COLOR, payload: { colorIndex } };
};

export const setColor = (index: number) => {
  return { type: actionNames.SET_COLOR, payload: { index } };
};

export const submit = () => {
  return { type: actionNames.SUBMIT, payload: {} };
};
