import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FecthItems from "../components/FecthItems";

function App() {
  return (
    <>
      <Header />
      <FecthItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
