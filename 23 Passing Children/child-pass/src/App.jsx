import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Chapati", "Salad", "Meat", "Fruits"];

  return (
    <Container>
      <h1 className="kg-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodInput />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
