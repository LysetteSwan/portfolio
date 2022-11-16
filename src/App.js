import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import swanLogo from "../src/images/swan.png";

function App() {
  const [myData, setMyData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/lysetteswan").then((res) =>
      res.json().then((data) => setMyData(data))
    );
  }, []);
  console.log(myData);
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <img src={swanLogo} className="nav--logo" />
          <ul className="navLinks">
            <Link className="navListItem" to="/">
              {" "}
              Home
            </Link>
            <Link className="navListItem" to="/projects">
              Projects
            </Link>
            <Link className="navListItem" to="/contact">
              {" "}
              Contact{" "}
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home myData={myData} />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
