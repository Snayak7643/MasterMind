import React, { useContext } from "react";
import { COLORS } from "../constants";
import GameContext from "../Contexts/gameContext";
import { selectColor } from "../Reducers/actions";
import ColorCirle from "./ColorCircle";

const SelectionBox = () => {
  const { state, dispatch } = useContext(GameContext);

  return (
    <div className="selection-box">
      {COLORS.map((color, colorIndex) => {
        return (
          <ColorCirle
            key={color}
            style={
              colorIndex === state.selectedColor
                ? { backgroundColor: color, border: "2px solid black" }
                : { backgroundColor: color }
            }
            handleClick={() => {
              dispatch(selectColor(colorIndex));
            }}
            isActive={true}
          />
        );
      })}
    </div>
  );
};

export default SelectionBox;
