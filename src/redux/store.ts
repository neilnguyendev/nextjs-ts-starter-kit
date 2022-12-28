import { createWrapper } from 'next-redux-wrapper';
import type { Store } from 'redux';
import { applyMiddleware, createStore } from 'redux';
import type { Task } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';

import type { AppState } from '@/redux/rootReducer';
import reducer from '@/redux/rootReducer';
import rootSaga from '@/redux/rootSaga';
import logger from 'redux-logger';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  const listMiddlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  listMiddlewares.push(sagaMiddleware);
  if (process.env.NEXT_PUBLIC_REDUX_LOGGER === 'true') {
    // @ts-ignore
    listMiddlewares.push(logger);
  }

  const createStoreWithMiddleware = applyMiddleware(...listMiddlewares)(
    createStore
  );

  const store = createStoreWithMiddleware(reducer);

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store<AppState>>(makeStore, {
  // debug: true,
});
