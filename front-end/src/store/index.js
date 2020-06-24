import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./sagas";

const sagaMiddlewares = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddlewares));

sagaMiddlewares.run(rootSaga);

export default store;
