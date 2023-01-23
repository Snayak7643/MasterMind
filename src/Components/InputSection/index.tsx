import React, { useContext } from "react";
import { GUESSES } from "../../constants";
import GameContext from "../../Contexts/gameContext";
import ColorCirle from "../ColorCircle";
import Button from "./components/Button";
import Output from "./components/Output";

type PropType = {
  index: number;
};

const InputSection: React.FunctionComponent<PropType> = ({ index }) => {
  const { state, dispatch } = useContext(GameContext);

  const setColor = (ind: number) => {
    dispatch({ type: "setColor", payload: { index: ind } });
  };

  const submit = () => {
    dispatch({ type: "submit", payload: {} });
  };

  return (
    <div
      className={
        state.activeIndex === index
          ? "input-section selected-input"
          : "input-section"
      }
    >
      {GUESSES.map((no) => {
        return (
          <ColorCirle
            key={no}
            style={state.styles[index][no]}
            handleClick={() => setColor(no)}
            isActive={state.activeIndex === index}
          />
        );
      })}

      <Button onClick={submit} index={index} />
      <Output index={index} />
    </div>
  );
};

export default InputSection;
