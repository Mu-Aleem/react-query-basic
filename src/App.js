import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Heros, Create } from "./pages";
import { Nav, UpdateData } from "./components";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Heros />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<UpdateData />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
