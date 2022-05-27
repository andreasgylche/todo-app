import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const pendingTodos = todos.filter(
      (todo) => todo.completed === false
    ).length;

    document.title = `You have ${pendingTodos} pending tasks`;
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const updateTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
