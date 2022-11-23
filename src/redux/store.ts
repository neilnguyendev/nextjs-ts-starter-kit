import { createWrapper } from 'next-redux-wrapper';
import type { Store } from 'redux';
import { applyMiddleware, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import type { Task } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '@/redux/rootReducer';
import rootSaga from '@/redux/rootSaga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, logger)
  );

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore, {
  debug: true,
});
