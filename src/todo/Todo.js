import { useEffect, useState } from "react";

import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

const localStorageKey = "todoItems";
let nextId = 0;

export default function TaskApp() {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    const todoItems = localStorage.getItem(localStorageKey);
    if (todoItems) {
      const parsedTodoItems = JSON.parse(todoItems);
      setTodo(parsedTodoItems);
      nextId = parsedTodoItems.length;
    }
  }, []);

  function handleAddTodo(title) {
    if (title !== "") {
      const todoItems = [
        ...todos,
        {
          id: nextId++,
          title: title,
          done: false,
        },
      ];
      setTodo(todoItems);

      localStorage.setItem(localStorageKey, JSON.stringify(todoItems));
    }
  }

  function handleChangeTodo(updatedTodo) {
    const todoItems = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    });
    setTodo(todoItems);

    localStorage.setItem(localStorageKey, JSON.stringify(todoItems));
  }

  function handleDeleteTodo(todoId) {
    const todoItems = todos.filter((todo) => todo.id !== todoId);
    setTodo(todoItems);

    localStorage.setItem(localStorageKey, JSON.stringify(todoItems));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
