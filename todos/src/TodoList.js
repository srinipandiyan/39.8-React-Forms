import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  // create todo and add to todos list
  const create = newTodo => {
    setTodos(todos => [...todos, newTodo]);
  };

  // delete a todo by id from todos list
  const remove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const todoComponents = todos.map(todo => (
    <Todo
      todo={todo.task}
      id={todo.id}
      remove={remove}
    />
  ));

  return (
    <div>
      <NewTodoForm createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );
}

export default TodoList;