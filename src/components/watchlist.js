import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import WatchlistItem from "./watchlistItem";
import { uniqBy } from "lodash";
import { Card } from "semantic-ui-react";
class Watchlist extends Component {
  render() {
    return (
      <div>
        <h3>My Watchlist</h3>
        <Card.Group stackable>
          {uniqBy(this.props.watchlist, "ticker").map(stock => {
            return <WatchlistItem key={stock.ticker} stock={stock} />;
          })}
        </Card.Group>
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
