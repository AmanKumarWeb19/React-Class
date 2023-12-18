import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Chapati", "Salad", "Meat", "Fruits"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
