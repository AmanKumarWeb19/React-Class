import { AiTwotoneDelete } from "react-icons/ai";
const TodoItem = ({ todoName, todoDate, onDeleteClick }) => {
  return (
    <div className="container">
      <div className="row row-class">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger btn-class"
            onClick={() => onDeleteClick(todoName)}
          >
            <AiTwotoneDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
