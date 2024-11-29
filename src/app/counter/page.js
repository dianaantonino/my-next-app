"use client"; 

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  const isEven = counter % 2 === 0;

  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}>
        <h1 style={{ marginBottom: "1rem" }}>Counter</h1>
        
        <h2 style={{ marginBottom: "1rem" }}>Counter: {counter}</h2>
        
        <p style={{ marginBottom: "2rem" }}>
          The number is {isEven ? "Even" : "Odd"}.
        </p>
        
        <div style={{ display: "flex", gap: "1rem" }}>
          <button onClick={increment} style={{ padding: "0.5rem 1rem" }}>
            Increment
          </button>
          <button onClick={decrement} style={{ padding: "0.5rem 1rem" }}>
            Decrement
          </button>
          <button onClick={reset} style={{ padding: "0.5rem 1rem" }}>
            Reset
          </button>
        </div>
      </div>      
  );
}
