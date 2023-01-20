import React from "react";

type PropType = {
  style: {
    backgroundColor: string;
  };
  handleClick: () => void;
};

const ColorCirle: React.FunctionComponent<PropType> = ({
  style,
  handleClick,
}) => {
  return (
    <button
      className="color-circle"
      style={style}
      onClick={handleClick}
    ></button>
  );
};

export default ColorCirle;
