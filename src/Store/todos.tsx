import React, { ReactNode } from "react";

export type TodoContextProviderProps = {
  children: ReactNode;
};

export const todosContext = React.createContext<TodoContext | null>(null);

export type Todo = {
  task: string;
  id: string;
  isCompleted: boolean;
  createdAt: Date;
};

export type TodoContext = {
  todos: Todo[];
  handleAddToDo(task: string): void;
  completeTodo(id: string): void;
  deleteTodo(id: string): void;
};
export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  /*const [todos, setTodos] = React.useState<Todo[]>(() => {

    try {
      return JSON.parse(localStorage.getItem("todos") || "[]") as Todo[];
    } catch (error) {
      return [];
    }
  });*/

  const initialTodos = (() => {
    try {
      return JSON.parse(localStorage.getItem("todos") || "[]") as Todo[];
    } catch (error) {
      return [];
    }
  })();

  const [todos, setTodos] = React.useState<Todo[]>(initialTodos);

  /* const handleAddToDo = (task: string) => {
    setTodos((prev) => {
      const newTask: Todo[] = [
        {
          id: Math.random().toString(),
          isCompleted: false,
          createdAt: new Date(),
          task: task,
        },
        ...prev,
      ];
      localStorage.setItem("todos", JSON.stringify(newTask));
      return newTask;
    });
  };*/
  const handleAddToDo = (task: string) => {
    setTodos((prev) => {
      const prevArray = prev ? prev : [];
      const newTask: Todo[] = [
        {
          id: Math.random().toString(),
          isCompleted: false,
          createdAt: new Date(),
          task: task,
        },
        ...prevArray, // Spread the elements of prevArray
      ];
      localStorage.setItem("todos", JSON.stringify(newTask));
      return newTask;
    });
  };

  const completeTodo = (id: string) => {
    setTodos(() => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };
  const deleteTodo = (id: string) => {
    setTodos(() => {
      let newTodos = todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, completeTodo, deleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

export const usetodos = () => {
  const todosConsumer = React.useContext(todosContext);
  if (!todosConsumer) throw Error("Cannot use todo outside of provider");
  return todosConsumer;
};

/*
const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  
 
};*/
