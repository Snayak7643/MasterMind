import React from "react";
import { GiBrain } from "react-icons/gi";

const Heading = () => {
  return (
    <div className="heading">
      <div className="heading-wrapper">
        <h2 className="yellow">M</h2>
        <h2 className="pink">A</h2>
        <h2 className="yellowgreen">S</h2>
        <h2 className="aqua">T</h2>
        <h2 className="red">E</h2>
        <h2 className="blue">R</h2>
        <h1 className="brain-icon">
          <GiBrain />
        </h1>
      </div>
    </div>
  );
};

export default Heading;
