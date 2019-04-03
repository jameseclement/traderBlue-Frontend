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
    this.props.fetchingPortfolio();
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/users/1/portfolios/1" component={PortfolioPage} />
          <Route path="/users/1/trade/:id" component={TradePage} />
          <Route exact path="/users/1/research" component={ResearchPage} />
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
    fetchingPortfolio: () => {
      dispatch(fetchingPortfolio());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
