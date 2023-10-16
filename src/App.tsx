import App_to_do from "./components/App_to_do";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { AiFillEdit } from "react-icons/ai";
import "./App.css";
const App = () => {
  return (
    <main>
      <AiFillEdit className="icon" />
      <h1>React + Typescript To-Do List</h1> <AiFillEdit className="icon" />
      <Navbar />
      <App_to_do />
      <TodoList />
    </main>
  );
};

export default App;
