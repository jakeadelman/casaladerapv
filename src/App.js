import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import GroundFloor from "./pages/GroundFloor";
import Penthouse from "./pages/Penthouse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/ground-floor" element={<GroundFloor />}></Route>
          <Route exact path="/penthouse" element={<Penthouse />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
