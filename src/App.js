import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import GroundFloor from "./pages/GroundFloor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/ground-floor" element={<GroundFloor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
