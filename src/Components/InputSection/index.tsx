import React from "react";
import ColorCirle from "../ColorCircle";
import Button from "./components/Button";
import Output from "./components/Output";

const InputSection = () => {
  return (
    <div className="input-section">
      <ColorCirle />
      <ColorCirle />
      <ColorCirle />
      <ColorCirle />
      <Button />
      <Output />
    </div>
  );
};

export default InputSection;
