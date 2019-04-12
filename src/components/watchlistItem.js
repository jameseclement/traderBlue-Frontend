import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import { Link } from "react-router-dom";
import { fetchingPosition } from "../redux/actions";
import { fetchingStock } from "../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WatchlistItem extends Component {
  render() {
    const fetchInfo = ticker => {
      this.props.fetchingPosition(
        ticker,
        this.props.portfolio.id,
        this.props.user
      );
      this.props.fetchingStock(ticker);
    };
    return (
      <Button>
        <Link
          onClick={() => {
            this.fetchInfo(this.props.stock.ticker);
          }}
          to={`/trade/${this.props.stock.ticker}`}
        >
          {this.props.stock.ticker}
        </Link>
      </Button>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchingPosition: (ticker, portfolioId, userId) => {
      dispatch(fetchingPosition(ticker, portfolioId, userId));
    },
    fetchingStock: () => {
      dispatch(fetchingStock());
    }
  };
};

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    watchlist: state.watchlist,
    user: state.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WatchlistItem)
);
