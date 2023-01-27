import React, { useContext } from "react";
import { GUESSES, MATCH } from "../../../constants";
import GameContext from "../../../Contexts/gameContext";
import { BsCircleFill, BsXCircle, BsCircle } from "react-icons/bs";

type PropType = {
  index: number;
};

const Output: React.FunctionComponent<PropType> = ({ index }) => {
  const { state } = useContext(GameContext);
  const output = state.gameMatrix[index].hint;

  return (
    <div className="output">
      <div className="output-row1">
        {GUESSES.map((guessNo) => {
          return (
            <div key={guessNo} className="output-circle">
              {output[guessNo] === MATCH.FULL ? (
                <BsCircleFill />
              ) : output[guessNo] === MATCH.NO ? (
                <BsXCircle />
              ) : (
                <BsCircle />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Output;
