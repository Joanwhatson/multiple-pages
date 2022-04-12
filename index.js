import React from "react";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import Navigation from "./Header";
import Navbar from './NavBar'
import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById('root'))
root.render( 

<Router>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/saved' element={<Services/>}/>
  </Routes>
</Router>


  
)
