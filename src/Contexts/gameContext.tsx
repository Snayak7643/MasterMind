import React, { createContext } from "react";
import { StateType, ActionType } from "../types";
import { INITIAL_STATE } from "../constants";

const GameContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({ state: INITIAL_STATE, dispatch: () => null });

export default GameContext;
