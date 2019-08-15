import { createStore } from "redux";
import racerReducer from "./reducers/racer";

export default createStore(
  racerReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
