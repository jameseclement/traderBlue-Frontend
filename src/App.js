import React, { Component } from "react";
import Navbar from "./components/navbar";
import PortfolioPage from "./containers/portfolioPage";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>This is my App</header>
        <Navbar />
        <PortfolioPage />
      </div>
    );
  }
}

export default App;
