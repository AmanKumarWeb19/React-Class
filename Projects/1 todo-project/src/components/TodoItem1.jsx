const TodoItem1 = () => {
  let todoName = "Buy Milk";
  let todoDate = "16-12-2023";
  return (
    <div className="container">
      <div className="row row-className">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn-className">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
