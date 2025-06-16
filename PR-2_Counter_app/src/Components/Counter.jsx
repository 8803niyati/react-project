
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
    setMessage('');
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    } else {
      setMessage('⚠️Stop! That’s the lowest it can go.');
    }
  };

  const handleReset = () => {
    setCount(0);
    setMessage('');
  };

  return (
    <div className="counter-container">
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div className="button-group">
        <button onClick={handleIncrement}>➕ Increment</button>
        <button onClick={handleDecrement}>➖ Decrement</button>
        <button onClick={handleReset}>🔁 Reset</button>
      </div>

      {message && <p className="alert-message">{message}</p>}
    </div>
  );
};

export default Counter;