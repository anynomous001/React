import App_to_do from "./components/App_to_do";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <main>
      <h1>React + Typescript To-Do List</h1>
      <Navbar />
      <App_to_do />
      <TodoList />
    </main>
  );
};

export default App;
