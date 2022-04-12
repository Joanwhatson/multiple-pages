import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
const Main = () => {
  return (
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/Services" component={<Services />} />
    </Routes>
  );
};

export default Main;