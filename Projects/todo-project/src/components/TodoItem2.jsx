const TodoItem2 = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">Buy car</div>
        <div className="col-4">18-12-2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem2;
