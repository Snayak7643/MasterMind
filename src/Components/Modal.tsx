import React, { useContext } from "react";
import GameContext from "../Contexts/gameContext";
import { newGame } from "../Reducers/actions";

const Modal = () => {
  const { state, dispatch } = useContext(GameContext);
  const { isWinner, isOver } = state;
  if (isWinner === false && isOver === false) {
    return <></>;
  }
  return (
    <div className={isWinner ? "overlay green" : "overlay orange"}>
      <div className="overlay-box">
        <h3>{isWinner ? "Congratulations!! You Won" : "Game Over!!"}</h3>
        <button
          className="okay"
          onClick={() => {
            dispatch(newGame());
          }}
        >
          Replay
        </button>
      </div>
    </div>
  );
};

export default Modal;
