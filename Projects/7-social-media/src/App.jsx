import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="content">
        <Header />
        <CreatePost />
        <PostList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
