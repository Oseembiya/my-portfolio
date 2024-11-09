import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/common/navbar";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
