import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import racerReducer from "./reducers/racer";

const store = createStore(racerReducer, applyMiddleware(thunkMiddleware));

export default store;

// export default createStore(
//   racerReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
