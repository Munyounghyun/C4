import { Route, Routes } from "react-router-dom";
import "./App.css";
import CampusMap from "./pages/CampusMap";
import Home from "./pages/Home";
import Loadmap from "./pages/Loadmap";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<CampusMap />} />
        <Route path="/loadmap" element={<Loadmap />} />
      </Routes>
    </div>
  );
}

export default App;
