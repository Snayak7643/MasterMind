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
  return (
    <button
      className="color-circle"
      style={style}
      onClick={handleClick}
      disabled={!isActive}
    ></button>
  );
};

export default ColorCirle;
