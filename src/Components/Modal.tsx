import React, { useContext } from "react";
import GameContext from "../Contexts/gameContext";

const Modal = () => {
  const { state } = useContext(GameContext);
  const { isWinner, isOver } = state;
  if (isWinner === false && isOver === false) {
    return <></>;
  }
  return (
    <div className="overlay">
      <div className="overlay-box">
        <h3>{isWinner ? "Congratulations!! You Won" : "Game Over!!"}</h3>
        <button className="okay">Replay</button>
      </div>
    </div>
  );
};

export default Modal;
