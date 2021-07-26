import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home'
import NavBar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import './style.css'
import Particles from 'react-particles-js';
import Params from './Components/particlesjs-config.json'
import Preloader from "./Components/Pre";
import React, { useState, useEffect } from "react";


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return(
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Particles params = {Params}/>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      </div>
      
    </Router>


  );
  
}

export default App;
