import React, { useReducer, useEffect } from "react";
import Heading from "./Components/Heading";
import InputSection from "./Components/InputSection";
import Modal from "./Components/Modal";
import SelectionBox from "./Components/SelectionBox";
import { INITIAL_STATE, NO_OF_CHANCES } from "./constants";
import GameContext from "./Contexts/gameContext";
import { newGame } from "./Reducers/actions";
import gameReducer from "./Reducers/gameReducer";

function App() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch(newGame());
  }, []);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <main>
        <Modal />
        <Heading />
        <SelectionBox />
        {NO_OF_CHANCES.map((index) => {
          return <InputSection key={index} index={index} />;
        })}
      </main>
    </GameContext.Provider>
  );
}

export default App;
