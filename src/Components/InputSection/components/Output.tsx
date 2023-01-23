import React, { useContext } from "react";
import { GUESSES } from "../../../constants";
import GameContext from "../../../Contexts/gameContext";

type PropType = {
  index: number;
};

const Output: React.FunctionComponent<PropType> = ({ index }) => {
  const { state } = useContext(GameContext);
  const output = state.output[index];

  return (
    <div className="output">
      <div className="output-row1">
        {GUESSES.map((guessNo) => {
          return (
            <div
              key={guessNo}
              className={
                output[guessNo] !== 1 ? "output-circle" : "output-circle black"
              }
            >
              <p>{output[guessNo] === -1 ? "X" : ""}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Output;
