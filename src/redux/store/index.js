import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middlewares/logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const globalState = createStore(
  rootReducer,
  composeWithDevTools()
  //composeWithDevTools(applyMiddleware(thunk, logger))
);

export default globalState;
