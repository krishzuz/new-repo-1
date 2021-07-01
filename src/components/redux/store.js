import { useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
