import React from "react";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

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
        <motion.li
          key={todo.id}
          className="task"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span
            className={todo.completed ? "completed" : null}
            onDoubleClick={() => props.updateTodo(todo.id)}
          >
            {todo.title}
          </span>
          <FaTrash onClick={() => props.deleteTodo(todo.id)} />
        </motion.li>
      ))}
    </ul>
  );
}
