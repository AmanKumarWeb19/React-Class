import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [];
  // let foodItems = ["Dal", "Chapati", "Salad", "Meat", "Fruits"];

  return (
    <>
      <h1>Healthy Food</h1>
      {foodItems.length === 0 ? <h3>I am Still hungry</h3> : null}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
