function Todo({ todo = "sample todo", id = "1", remove }) {

  const handleDelete = () => remove(id);

  return (
    <div>
      <li>{todo}</li>
      <button onClick={handleDelete}>X</button>
    </div>
  );
  
}

export default Todo;