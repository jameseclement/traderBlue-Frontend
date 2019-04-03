import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WatchlistItem from "./watchlistItem";
class Watchlist extends Component {
  render() {
    return (
      <div>
        {this.props.watchlist.map(stock => {
          return <WatchlistItem key={stock.ticker} stock={stock} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  };
};

export default withRouter(connect(mapStateToProps)(Watchlist));
