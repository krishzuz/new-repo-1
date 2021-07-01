import { combineReducers } from "redux";
import { newReducer, newReducer1 } from "./newReducer";

const allReducers = combineReducers({
  allData: newReducer,
  addTask: newReducer1,
});

export default allReducers;
