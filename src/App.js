/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';
import CounterContainer from './containers/CounterContainer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(reducers, applyMiddleware(sagaMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default App;

sagaMiddleware.run(rootSaga);
