import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = ["Dal", "Chapati", "Salad", "Meat", "Fruits"];
  return (
    <>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItems.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
