import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import GroundFloor from "./pages/GroundFloor";
import Penthouse from "./pages/Penthouse";
import MainFloor from "./pages/MainFloor";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/ground-floor" element={<GroundFloor />}></Route>
          <Route exact path="/penthouse" element={<Penthouse />}></Route>
          <Route exact path="/main-floor" element={<MainFloor />}></Route>
          <Route exact path="/reviews" element={<Reviews />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
