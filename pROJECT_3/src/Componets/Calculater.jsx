import React, { useState } from "react";


function Calculater() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const finalResult = eval(input.replace(/×/g, '*').replace(/÷/g, '/'));
        setResult(finalResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <h1> Calculator</h1>
      <div className="display">
        <div>{input || "0"}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "÷",
         "4", "5", "6", "×",
         "1", "2", "3", "-",
         "0", ".", "C", "+", 
         "="].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculater;
