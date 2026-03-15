import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <hr></hr>
        <Link to="/home">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/service">Service</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <hr></hr>
    </div>
  );
}

export default App;
