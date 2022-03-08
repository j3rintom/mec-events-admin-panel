import "./App.css";
import Events from "./components/Events";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/adsja78sdiuasdyasdkha87878syad9a9"
            element={<Events />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
