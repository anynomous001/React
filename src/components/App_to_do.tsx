import React, { FormEvent } from "react";
import { usetodos } from "../Store/todos";

const App_to_do = () => {
  const [todo, setTodo] = React.useState("");
  const { handleAddToDo } = usetodos();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddToDo(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App_to_do;
