import { Landing, Home, Detail, Form } from "./view";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import axios from "axios";

axios.defaults.baseURL = "https://pi-countries-production-5df7.up.railway.app"; // "http://localhost:3001" PARA HACER PETICION AL SERVIDOR LOCALMENTE

function App() {
  const location = useLocation().pathname;

  return (
    <div className="App">
      {location !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:IdCountry" element={<Detail />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
