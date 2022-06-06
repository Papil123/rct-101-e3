import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequiredAuth from "./hoc/RequiredAuth";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Routes>
       
        <Route path="/" element={ <RequiredAuth><Home/></RequiredAuth>} />
       <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
