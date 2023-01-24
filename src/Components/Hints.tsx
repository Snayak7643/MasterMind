import React, { useState } from "react";
import { BsCircleFill, BsXCircle, BsCircle } from "react-icons/bs";
import { constraints } from "../constants";

const Hints = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="hints">
        <h4
          onClick={() => {
            setShow((show) => !show);
          }}
        >
          {show ? "Hide" : "Show"} Hints
        </h4>
        {show ? (
          <p>
            Try to guess the pattern, in both order and color, within{" "}
            {constraints.NO_OF_CHANCES} turns. After submitting a row,
            <br />
            <BsCircleFill /> A small black peg is placed for each code peg from
            the guess which is correct in both color and position.
            <br />
            <BsCircle /> A white peg indicates the existence of a correct color
            code peg placed in the wrong position. <br />
            <BsXCircle /> This peg indicates the existance of wrong color code
            <br />
            More info on{" "}
            <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
              Wikipedia
            </a>
            .
          </p>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Hints;
