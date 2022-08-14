import {createStore} from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }

  if (action.type === 'incrementBy2x') {
    return {
      counter: state.counter + 2
    };
  }


  if (action.type === 'decrementBy2x') {
    return {
      counter: state.counter - 2
    };
  }

  if (action.type === 'incrementBy5x') {
    return {
      counter: state.counter + 5
    };
  }


  if (action.type === 'decrementBy5x') {
    return {
      counter: state.counter - 5
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;