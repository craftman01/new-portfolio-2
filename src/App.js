import { HashRouter, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import './App.css';
import Hero from "./Hero";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Hero  />} />
         
        </Routes>
      </HashRouter>
    );
  }
}

export default App;
