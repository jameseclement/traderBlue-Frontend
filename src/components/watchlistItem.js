import React, { Component } from "react";
import { Link } from "react-router-dom";

class WatchlistItem extends Component {
  render() {
    return (
      <Link to={`/users/1/trade/${this.props.stock.ticker}`}>
        {this.props.stock.ticker}
      </Link>
    );
  }
}

export default WatchlistItem;
