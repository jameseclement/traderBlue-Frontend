import React, { Component } from "react";
import Navbar from "./navbar";
import { Route, Switch } from "react-router-dom";
import PortfolioPage from "../containers/portfolioPage";
import TradePage from "../containers/tradePage";
import ResearchPage from "../containers/researchPage";
import logo from "../logo.svg";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/trade" component={TradePage} />
          <Route exact path="/research" component={ResearchPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
