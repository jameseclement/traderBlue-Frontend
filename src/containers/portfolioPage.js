import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import PositionsTable from "../components/positionsTable";
import PortfolioChart from "../components/portfolioChart";
import PortfolioSummary from "../components/portfolioSummary";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchingWatchlist } from "../redux/actions";
import { fetchingPortfolio } from "../redux/actions";

class PortfolioPage extends Component {
  componentDidMount() {
    this.props.fetchingWatchlist();
    this.props.fetchingPortfolio(this.props.match.params.id);
  }

  render() {
    return (
      <div className="ui grid">
        <div className="ten wide column">
          <PositionsTable />
        </div>
        <div className="three wide column">
          <PortfolioSummary />
        </div>
        <div className="three wide column">
          <Watchlist />
        </div>

        <PortfolioChart />
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

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PortfolioPage)
);
