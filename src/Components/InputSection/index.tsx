import React, { useContext } from "react";
import { GUESSES } from "../../constants";
import GameContext from "../../Contexts/gameContext";
import { setColor } from "../../Reducers/actions";
import ColorCirle from "../ColorCircle";
import Button from "./components/Button";
import Output from "./components/Output";

type PropType = {
  index: number;
};

const InputSection: React.FunctionComponent<PropType> = ({ index }) => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <div
      className={
        state.activeIndex === index
          ? "input-section selected-input"
          : "input-section"
      }
    >
      {GUESSES.map((guessNo) => {
        return (
          <ColorCirle
            key={guessNo}
            style={state.styles[index][guessNo]}
            handleClick={() => dispatch(setColor(guessNo))}
            isActive={state.activeIndex === index}
          />
        );
      })}

      <Button isActive={state.activeIndex === index} />
      <Output index={index} />
    </div>
  );
};

export default InputSection;
