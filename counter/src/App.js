import { useState } from "react";
import './App.css';

export default function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };



  return (
    <div className="counter">
      <h1> Counter App </h1>

      <div className="count">
        Count: {count}
      </div>

      <div className="buttons">

        <button onClick={handleIncrement}> Increment </button>

        <button onClick={handleDecrement}> Decrement </button>

      </div>
      
    </div>
  );
}


