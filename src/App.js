import React, { Component } from "react";
import Navbar from "./components/navbar";
import PortfolioPage from "./containers/portfolioPage";
import TradePage from "./containers/tradePage";
import ResearchPage from "./containers/researchPage";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <br />
        <br />
        <br />
        PortfolioPage
        <br />
        <br />
        <PortfolioPage />
        <br />
        <br />
        <br />
        TradePage
        <br />
        <br />
        <TradePage />
        <br />
        <br />
        <br />
        ResearchPage
        <br />
        <br />
        <ResearchPage />
      </div>
    );
  }
}

export default App;
