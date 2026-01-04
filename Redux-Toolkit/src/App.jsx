import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/slices/CounterSlice';

const App = () => {
  const dispatch = useDispatch(); // perform action
  const count = useSelector((state)=> state.counter.value); // show value
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment());
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement());
      }}>Decrement</button>

      <button onClick={() => {
        dispatch(incrementByAmount(10));
      }}>Increment By Amount</button>
    </div>
  )
}

export default App
