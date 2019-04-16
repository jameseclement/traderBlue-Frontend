import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import PositionsTable from "../components/positionsTable";
import PortfolioSummary from "../components/portfolioSummary";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchingWatchlist } from "../redux/actions";
import { fetchingPortfolio } from "../redux/actions";
import { Card, Grid, Divider } from "semantic-ui-react";

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
      <Grid>
        <Grid.Column width="1" />

        <Grid.Column width="4">
          <h1 className="ui blue header">{this.props.portfolio.name}</h1>
          <PortfolioSummary />
        </Grid.Column>
        <Grid.Column width="8">
          <h1 className="ui blue header align left">My Investments</h1>

          <PositionsTable />
        </Grid.Column>
        <Grid.Column width="2">
          <Watchlist />
        </Grid.Column>
        <Grid.Column width="1" />
      </Grid>
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
