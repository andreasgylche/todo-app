import React from "react";
import { FaTrash } from "react-icons/fa";

export default function TodoList(props) {
  if (!props.todos.length > 0) {
    return (
      <ul className="todo-list">
        <li>You have no tasks.</li>
      </ul>
    );
  }

  return (
    <ul className="todo-list">
      {props.todos.map((todo) => (
        <li key={todo.id} className="task">
          <span
            className={todo.completed ? "completed" : null}
            onDoubleClick={() => props.updateTodo(todo.id)}
          >
            {todo.title}
          </span>
          <FaTrash onClick={() => props.deleteTodo(todo.id)} />
        </li>
      ))}
    </ul>
  );
}
