import React, { useState } from 'react';

function Counter() {
  // Initialize counter with a default value
  const [counter, setCounter] = useState(0);

  // Implement handleSubstract
  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  // Implement handleReset
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleSubstract}>Subtract</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Counter;
