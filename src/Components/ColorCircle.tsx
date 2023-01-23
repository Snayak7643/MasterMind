import React from "react";

type PropType = {
  style: any;
  handleClick: () => void;
  isActive: boolean;
};

const ColorCirle: React.FunctionComponent<PropType> = ({
  style,
  handleClick,
  isActive,
}) => {
  if (isActive) {
    return (
      <button
        className="color-circle"
        style={style}
        onClick={handleClick}
      ></button>
    );
  }
  return (
    <button className="color-circle" style={style} onClick={() => {}}></button>
  );
};

export default ColorCirle;
