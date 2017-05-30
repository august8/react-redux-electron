import Immutable from 'immutable';
import { ACTION_INCREMENT, ACTION_DECREMENT } from '../constants/ActionTypes';

const initialState = Immutable.Map({
  count: 0,
});

const couterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_INCREMENT:
      return state.set('count', state.get('count') + action.payload);

    case ACTION_DECREMENT:
      return state.set('count', state.get('count') + action.payload);

    default:
      return state;
  }
};

export default couterReducer;
