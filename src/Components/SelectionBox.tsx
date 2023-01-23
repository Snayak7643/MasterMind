import React, { useContext } from "react";
import { COLORS } from "../constants";
import GameContext from "../Contexts/gameContext";
import ColorCirle from "./ColorCircle";

const SelectionBox = () => {
  const { state, dispatch } = useContext(GameContext);

  const setColor = (colorIndex: number) => {
    dispatch({ type: "selectColor", payload: { colorIndex } });
  };

  return (
    <div className="selection-box">
      {COLORS.map((color, i) => {
        return (
          <ColorCirle
            key={color}
            style={
              i === state.selectedColor
                ? { backgroundColor: color, border: "2px solid black" }
                : { backgroundColor: color }
            }
            handleClick={() => {
              setColor(i);
            }}
            isActive={true}
          />
        );
      })}
    </div>
  );
};

export default SelectionBox;
