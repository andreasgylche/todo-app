import React, { useState } from "react";

export default function AddTodo(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input === "") {
      alert("Please fill out the input field before adding a todo.");
      return;
    }

    const newTodo = {
      id: Math.round(Math.random() * 10000),
      title: input,
      completed: false,
    };

    props.addTodo(newTodo);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Walk the dog..."
        autoFocus
      />
      <button type="submit">Add task</button>
    </form>
  );
}
