"use client"; // Required for client-side interactivity

import { useState } from "react";

export default function Calculator() {
  // States for the input values
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // Handler for resetting the inputs
  const resetInputs = () => {
    setNum1(0);
    setNum2(0);
  };

  // Calculate the sum dynamically
  const sum = parseFloat(num1 || 0) + parseFloat(num2 || 0);

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

      <h1>Calculator</h1>
      <div style={{ marginBottom: "1rem"}}>

        {/* First Number */}
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="0"
          style={{ marginRight: "1rem", padding: "0.5rem", width: "150px", marginTop:'20px' }}
        />

       {/* Plus Sign */}
        <span style={{ fontSize: "1.5rem", marginRight: "1rem" }}>+</span>


        {/* Second Number */}
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="0"
          style={{ padding: "0.5rem", width: "150px" }}
        />
      </div>

      {/* Sum Display */}
      <h2>Sum: {sum}</h2>

      {/* Reset Button */}
      <button onClick={resetInputs} style={{
        marginTop: "1rem",
        padding: "0.5rem 1rem",
        cursor: "pointer",
      }}>
        Reset
      </button>
    </div>
  );
}
