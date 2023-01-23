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
        {GUESSES.map((no) => {
          return (
            <div
              key={no}
              className={
                output[no] !== 1 ? "output-circle" : "output-circle black"
              }
            >
              <p>{output[no] === -1 ? "X" : ""}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Output;
