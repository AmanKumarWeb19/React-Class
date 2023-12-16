function App() {
  return (
    <center className="todo-container">
      <h1>TODO - APP</h1>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success">
              Add
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">16-12-2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

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
    </center>
  );
}

export default App;