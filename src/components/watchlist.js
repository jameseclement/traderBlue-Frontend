import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WatchlistItem from "./watchlistItem";
import { Button } from "semantic-ui-react";
class Watchlist extends Component {
  render() {
    return (
      <div>
        <h3>My Watchlist</h3>
        <Button.Group vertical>
          {this.props.watchlist.map(stock => {
            return <WatchlistItem key={stock.ticker} stock={stock} />;
          })}
        </Button.Group>
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
