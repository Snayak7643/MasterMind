import React from "react";

type PropType = {
  style: {
    backgroundColor: string;
  };
};

const ColorCirle: React.FunctionComponent<PropType> = ({ style }) => {
  return <button className="color-circle" style={style}></button>;
};

export default ColorCirle;
