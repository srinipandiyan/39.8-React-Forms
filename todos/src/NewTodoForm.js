import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
  const [todo, setTodo] = useState("");

  const handleChange = e => {
    setTodo(e.target.value);
  };

  const gatherInput = e => {
    e.preventDefault();
    createTodo({ task, id: uuid() });
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={gatherInput}>
        <label htmlFor="todo">Todo:</label>
        <input
          id="todo"
          name="todo"
          type="text"
          onChange={handleChange}
          value={todo}
        />
        <button>Add Todo!</button>
      </form>
    </div>
  );
}

export default NewTodoForm;