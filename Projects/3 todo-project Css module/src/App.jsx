import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "04 / 10 / 2023",
    },
    {
      name: "Go to College",
      dueDate: "18 / 10 / 2023",
    },
    {
      name: "Go to BAnk",
      dueDate: "20 / 10 / 2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
