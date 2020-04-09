import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas";
import { reducers } from "./symbiotes";

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = compose;
  const store = createStore(reducers, composeEnhancers(applyMiddleware(createLogger({}), sagaMiddleware)));
  sagaMiddleware.run(sagas);
  return store;
};
