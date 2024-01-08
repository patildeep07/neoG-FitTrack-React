import "./styles.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "./pages/dashboard";
import Exercises from "./pages/exercises";
import Food from "./pages/food";
import Goals from "./pages/goals";

export default function App() {
  const navigate = useNavigate();

  const loading = useSelector((state) => state.loading);
  return (
    <div className="App">
      <header>
        <h1 onClick={() => navigate("/")}>Fit Track</h1>
        <nav className="navBar">
          <li onClick={() => navigate("/")}>Dashboard</li>
          <li onClick={() => navigate("/exercises")}>Exercises</li>
          <li onClick={() => navigate("/food")}>Food</li>
          <li onClick={() => navigate("/goals")}>Goals</li>
        </nav>
      </header>

      {/* Routing */}
      {loading && <h2>Loading...</h2>}

      {!loading && (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/food" element={<Food />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      )}
    </div>
  );
}
