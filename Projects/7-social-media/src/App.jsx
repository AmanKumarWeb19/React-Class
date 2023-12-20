import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="content">
        <Header />
        <CreatePost />
        <Footer />
      </div>
    </div>
  );
}

export default App;
