import createSagaMiddleware from 'redux-saga'
import reducer from '../Reducers/index'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

export default function ConfigureStore() {
  // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducer, applyMiddleware(/* other middleware, */sagaMiddleware,thunk,logger)),
    runSaga: sagaMiddleware.run
  }
}