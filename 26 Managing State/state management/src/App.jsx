import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
    }
  };

  return (
    <Container>
      <h1 className="kg-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
