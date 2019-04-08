import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchingPosition } from "../redux/actions";
import { fetchingStock } from "../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class WatchlistItem extends Component {
  render() {
    const fetchInfo = ticker => {
      this.props.fetchingPosition(ticker);
      this.props.fetchingStock(ticker);
    };
    return (
      <li>
        <Link
          onClick={() => {
            this.fetchInfo(this.props.stock.ticker);
          }}
          to={`/trade/${this.props.stock.ticker}`}
        >
          {this.props.stock.ticker}
        </Link>
      </li>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchingPosition: () => {
      dispatch(fetchingPosition());
    },
    fetchingStock: () => {
      dispatch(fetchingStock());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(WatchlistItem)
);
