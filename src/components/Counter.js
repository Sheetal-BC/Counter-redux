import { useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/index';
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
const show = useSelector(state => state.counter.showCounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const incrementHandlerBy2x = () => {
    dispatch(counterActions.incrementBy2x(2));
  };

  const decrementHandlerBy2x = () => {
    dispatch(counterActions.decrementBy2x(2));
  };

  const incrementHandlerBy5x = () => {
    dispatch(counterActions.incrementBy5x(5));
  };

  const decrementHandlerBy5x = () => {
    dispatch(counterActions.decrementBy5x(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
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
