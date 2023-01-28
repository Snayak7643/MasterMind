import React, { useContext } from "react";
import { FcApproval } from "react-icons/fc";
import GameContext from "../../../Contexts/gameContext";
import { submit } from "../../../Reducers/actions";
import { checkButtonVisibility } from "../../../Utils/functions";

type PropType = {
  isActive: boolean;
};

const Button: React.FunctionComponent<PropType> = ({ isActive }) => {
  const { state, dispatch } = useContext(GameContext);

  if (isActive && checkButtonVisibility(state.input)) {
    return (
      <button
        className="submit-button"
        onClick={() => {
          dispatch(submit());
        }}
      >
        <FcApproval className="check-icon" />
      </button>
    );
  }

  return <div className="empty-button"></div>;
};

export default Button;
