import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Books from "./components/Books";
import Add from "./components/Add";
import Update from "./components/Update";
import "./style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
