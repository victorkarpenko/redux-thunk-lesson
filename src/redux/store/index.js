import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
/* import { logger } from "../middlewares/logger"; */
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from "../reducers";
import {testMiddleware} from '../middlewares/testMiddleware';

const globalState = createStore(
  rootReducer,
  applyMiddleware(testMiddleware, logger, thunk)
);

export default globalState;
