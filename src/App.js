/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';
import CounterContainer from './containers/CounterContainer';

let store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default App;
