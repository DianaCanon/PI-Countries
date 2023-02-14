import { Landing, Home, Detail, Form } from "./view";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";

function App() {
  const location = useLocation().pathname;
  
  return (
    <div className="App">
      {location !== "/" && <NavBar />}
      <Routes>
        <Route exact path="/" element= {<Landing />}/>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/create" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
