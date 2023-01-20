import React, { createContext } from "react";
import { ActionType, INITIAL_STATE, StateType } from "../constants";

const GameContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export default GameContext;
