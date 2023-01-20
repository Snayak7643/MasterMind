import React, { useContext } from "react";
import GameContext from "../../Contexts/gameContext";
import ColorCirle from "../ColorCircle";
import Button from "./components/Button";
import Output from "./components/Output";

const InputSection = () => {
  const { state } = useContext(GameContext);

  return (
    <div className="input-section">
      <ColorCirle style={state.styles[0]} />
      <ColorCirle style={state.styles[1]} />
      <ColorCirle style={state.styles[2]} />
      <ColorCirle style={state.styles[3]} />
      <Button />
      <Output />
    </div>
  );
};

export default InputSection;
