import React, { Component } from "react";
import Navbar from "./navbar";

import { Route, Switch } from "react-router-dom";
import PortfolioPage from "../containers/portfolioPage";
import TradePage from "../containers/tradePage";
import ResearchPage from "../containers/researchPage";
import "../App.css";
import { fetchingWatchlist } from "../redux/actions";
import { fetchingPortfolio } from "../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchingWatchlist();
    this.props.fetchingPortfolio(2);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ResearchPage} />
          <Route path="/portfolios/:id" component={PortfolioPage} />
          <Route path="/trade/:id" render={() => <TradePage />} />
          <Route path="/trade" component={TradePage} />
          <Route path="/research" component={ResearchPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchingWatchlist: () => {
      dispatch(fetchingWatchlist());
    },
    fetchingPortfolio: portfolioId => {
      dispatch(fetchingPortfolio(portfolioId));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
