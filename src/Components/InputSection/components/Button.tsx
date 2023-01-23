import React, { useContext } from "react";
import { FcApproval } from "react-icons/fc";
import GameContext from "../../../Contexts/gameContext";

type PropType = {
  onClick: () => void;
  index: number;
};

const Button: React.FunctionComponent<PropType> = ({ onClick, index }) => {
  const { state } = useContext(GameContext);
  const check: () => boolean = () => {
    for (var i = 0; i < state.input.length; i++) {
      if (state.input[i] === 7) {
        return false;
      }
    }
    return true;
  };
  if (state.activeIndex > index) {
    return (
      <button className="submit-button" onClick={() => {}}>
        <FcApproval className="check-icon" />
      </button>
    );
  }
  if (state.activeIndex === index && check()) {
    return (
      <button className="submit-button" onClick={onClick}>
        <FcApproval className="check-icon" />
      </button>
    );
  }
  return <div></div>;
};

export default Button;
