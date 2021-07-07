/* eslint-disable default-case */
import { ActionTypes } from "../constants/action-type";
const initialState = {
  UserData: [],
};
const initialState1 = {
  UserAddTask: [
    {
      name: "kishore",
    },
  ],
};
export const newReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.USER_DETAILS:
      return { ...state, UserData: payload };
    default:
      return state;
  }
};

export const newReducer1 = (state = initialState1, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TASK:
      return { ...state, UserAddTask: payload };
    default:
      return state;
  }
};
