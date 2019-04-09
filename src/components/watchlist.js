import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WatchlistItem from "./watchlistItem";
class Watchlist extends Component {
  render() {
    return (
      <div>
        <h3>My Watchlist</h3>
        <div role="list" className="ui list">
          {this.props.watchlist.map(stock => {
            return <WatchlistItem key={stock.ticker} stock={stock} />;
          })}
        </div>
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
