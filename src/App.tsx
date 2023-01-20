import React, { useReducer } from "react";
import Heading from "./Components/Heading";
import InputSection from "./Components/InputSection";
import SelectionBox from "./Components/SelectionBox";
import { INITIAL_STATE, INPUT_SECTIONS } from "./constants";
import GameContext from "./Contexts/gameContext";
import gameReducer from "./Reducers/gameReducer";

function App() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <main>
        <Heading />
        <SelectionBox />
        {INPUT_SECTIONS.map((no) => {
          return <InputSection key={no} />;
        })}
      </main>
    </GameContext.Provider>
  );
}

export default App;
