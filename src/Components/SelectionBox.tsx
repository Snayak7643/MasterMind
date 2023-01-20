import React from "react";
import ColorCirle from "./ColorCircle";

const SelectionBox = () => {
  return (
    <div className="selection-box">
      {[0, 1, 2, 3, 4, 5].map((no) => {
        return <ColorCirle key={no} />;
      })}
    </div>
  );
};

export default SelectionBox;
