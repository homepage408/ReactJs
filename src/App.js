import React from 'react'
import logo from "./logo.svg";
// import "./App.css";
import Home from './Component/Fungsional/Home';
import Parent from './Component/Class/Parent';
// import Beranda from './Component/Class/Beranda';
import NavbarComp from './Component/Fungsional/NavbarComp'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Component/Fungsional/HomePage';
import AboutComp from './Component/Fungsional/AboutComp';


const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutComp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
