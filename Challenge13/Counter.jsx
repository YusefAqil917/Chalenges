// Counter.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBy, decrement } from './actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0);

  const handleIncrementChange = (e) => {
    setIncrementValue(Number(e.target.value));
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="number"
        value={incrementValue}
        onChange={handleIncrementChange}
      />
      <button onClick={() => dispatch(incrementBy(incrementValue))}>
        Increment by {incrementValue}
      </button>
    </div>
  );
};

export default Counter;
