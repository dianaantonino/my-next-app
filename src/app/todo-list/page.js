"use client"; 

import { useState } from "react";

export default function TodoList() {
 

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); // Clear input field
    }
  };

  // Remove a todo
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Toggle todo completion
  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      marginTop: "50px",
    }}>
      <h1>Todo List</h1>
      <br/>

      {/* Input Field and Add Button */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
          style={{
            padding: "0.5rem",
            width: "200px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
            width: "300px",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: todo.completed ? "#d4edda" : "#f8d7da",
          }}>
            {/* Checkbox and Todo Text */}
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
                style={{ marginRight: "10px" }}
              />
              <span style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}>
                {todo.text}
              </span>
            </div>
            
            {/* Remove Button */}
            <button
              onClick={() => removeTodo(index)}
              style={{
                padding: "0.25rem 0.5rem",
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
