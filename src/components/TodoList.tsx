import { usetodos } from "../Store/todos";
import { useSearchParams } from "react-router-dom";

const TodoList = () => {
  const { todos, completeTodo, deleteTodo } = usetodos();
  const [params] = useSearchParams();

  let filterdData = todos || [];

  if (params.get("todos") === "completed") {
    filterdData = filterdData.filter((todo) => todo.isCompleted);
  } else if (params.get("todos") === "active") {
    filterdData = filterdData.filter((todo) => !todo.isCompleted);
  }

  return (
    <div>
      <ul>
        {filterdData.map?.((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={todo.id}
                checked={todo.isCompleted}
                onChange={() => completeTodo(todo.id)}
              />
              <label htmlFor={todo.id}>{todo.task}</label>
              {todo.isCompleted && (
                <button type="button" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
