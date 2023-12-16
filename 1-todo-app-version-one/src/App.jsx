import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <br />
      <AddTodo />
      <br />
      <div className="Item-container">
        <TodoItem1 />
        <br />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
