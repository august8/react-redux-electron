import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import couterReducer from './reducers/CounterReducer';
import IncrementButton from './containers/increment-button';
import DecrementButton from './containers/decrement-button';
import CounterMessage from './containers/counter-message';

const store = createStore(combineReducers({
  calc: couterReducer,
}));

const App = () => (
  <Provider store={store}>
    <div>
      <CounterMessage />
      <IncrementButton />
      <DecrementButton />
    </div>
  </Provider>
);

export default App;
