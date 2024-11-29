"use client";

import { useState } from "react";

export default function GrowButton() {

  // track button size and color
  const [size, setSize] = useState(16); // Initial font size
  const [color, setColor] = useState("#0070f3"); // Initial color

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Handle button click
  const handleClick = () => {
    setSize(size * 2); // Double the size
    setColor(getRandomColor()); // Change to a random color
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
    }}>
      <button
        onClick={handleClick}
        style={{
          fontSize: `${size}px`, // Dynamic size
          backgroundColor: color, // Dynamic color
          color: "#fff",
          padding: "1rem 2rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease", // Smooth transition for size and color
        }}
      >
        GROW
      </button>
    </div>
  );
}
