import React from "react";
import ColorCirle from "../ColorCircle";
import Button from "./components/Button";
import Output from "./components/Output";

const InputSection = () => {
  return (
    <div className="input-section">
      <ColorCirle style={{ backgroundColor: "white" }} />
      <ColorCirle style={{ backgroundColor: "white" }} />
      <ColorCirle style={{ backgroundColor: "white" }} />
      <ColorCirle style={{ backgroundColor: "white" }} />
      <Button />
      <Output />
    </div>
  );
};

export default InputSection;
