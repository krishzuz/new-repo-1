import { ActionTypes } from "../constants/action-type";

export const setUserDetails = (data) => {
  return {
    type: ActionTypes.USER_DETAILS,
    payload: data,
  };
};
export const setUserTask = (data) => {
  return {
    type: ActionTypes.ADD_TASK,
    payload: data,
  };
};
