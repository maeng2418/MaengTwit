import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/slices';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  if (process.env.NODE_ENV === 'development') {
  }
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(createStore, { debug: process.env.NODE_ENV !== 'production' });

export type State = ReturnType<typeof rootReducer>;

export default wrapper;
