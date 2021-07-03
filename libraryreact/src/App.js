// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import Navbar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard";
import Customer from "./components/customer";
import Products from "./components/products";
import Delete from "./components/delete";
import Login from "./components/login";
import Register from "./components/register";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Router>
        <Switch>
          <Customer />
        </Switch>
      </Router>
    </>
  );
}

export default App;
