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
    this.props.fetchingWatchlist(this.props.user.id);
    this.props.fetchingPortfolio(
      this.props.match.params.id,
      this.props.user.id
    );
  }
  componentDidUpdate(prevProps) {
    const params = this.props.match.params;
    const prevParams = prevProps.match.params;
    if (prevParams.id !== params.id) {
      this.props.fetchingWatchlist(this.props.user.id);
      this.props.fetchingPortfolio(
        this.props.match.params.id,
        this.props.user.id
      );
    }
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingWatchlist: userId => {
      dispatch(fetchingWatchlist(userId));
    },
    fetchingPortfolio: (portfolioId, userId) => {
      dispatch(fetchingPortfolio(portfolioId, userId));
    }
  };
};

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PortfolioPage)
);
