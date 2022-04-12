import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/Services" component={<Services />} />
    </Routes>
    </div>
  );
}

export default App;
