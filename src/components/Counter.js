import { useSelector, useDispatch} from 'react-redux';

import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementHandlerBy2x = () => {
    dispatch({ type: 'incrementBy2x' });
  };

  const decrementHandlerBy2x = () => {
    dispatch({ type: 'decrementBy2x' });
  };

  const incrementHandlerBy5x = () => {
    dispatch({ type: 'incrementBy5x' });
  };

  const decrementHandlerBy5x = () => {
    dispatch({ type: 'decrementBy5x' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementHandlerBy2x}>IncrementBy2x</button>
        <button onClick={decrementHandlerBy2x}>DecrementBy2x</button>
      </div>
       <div>
        <button onClick={incrementHandlerBy5x}>IncrementBy5x</button>
        <button onClick={decrementHandlerBy5x}>DecrementBy5x</button>
      </div> 
        

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
