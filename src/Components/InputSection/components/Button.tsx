import React, { useContext } from "react";
import { FcApproval } from "react-icons/fc";
import GameContext from "../../../Contexts/gameContext";
import { submit } from "../../../Reducers/actions";
import { check } from "../../../Utils/functions";

type PropType = {
  isActive: boolean;
};

const Button: React.FunctionComponent<PropType> = ({ isActive }) => {
  const { state, dispatch } = useContext(GameContext);

  if (isActive) {
    return (
      <button
        className="submit-button"
        onClick={
          check(state.input)
            ? () => {
                dispatch(submit());
              }
            : () => {
                alert("Please Fill All the Gusses in that row!!");
              }
        }
      >
        <FcApproval className="check-icon" />
      </button>
    );
  }

  return <div className="empty-button"></div>;
};

export default Button;
