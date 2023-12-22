import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";

const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  return (
    <div className="container">
      <form className="row row-className" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success btn-className">
            <IoBagAddOutline />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
