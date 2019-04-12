import React, { Component } from "react";
import Navbar from "./navbar";

import { Route, Switch } from "react-router-dom";
import PortfolioPage from "../containers/portfolioPage";
import TradePage from "../containers/tradePage";
import ResearchPage from "../containers/researchPage";
import "../App.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ResearchPage} />
          <Route path="/portfolios/:id" render={() => <PortfolioPage />} />
          <Route path="/trade/:id" render={() => <TradePage />} />
          <Route path="/trade" component={TradePage} />
          <Route path="/research" component={ResearchPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    null
  )(App)
);
