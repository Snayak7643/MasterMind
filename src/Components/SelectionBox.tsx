import React from "react";
import { COLORS } from "../constants";
import ColorCirle from "./ColorCircle";

const SelectionBox = () => {
  const setColor = (colorIndex: number) => {
    console.log(colorIndex);
  };

  return (
    <div className="selection-box">
      {[0, 1, 2, 3, 4, 5].map((no) => {
        return (
          <ColorCirle
            key={no}
            style={{ backgroundColor: COLORS[no] }}
            handleClick={() => {
              setColor(no);
            }}
          />
        );
      })}
    </div>
  );
};

export default SelectionBox;
