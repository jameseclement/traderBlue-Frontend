import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Watchlist extends Component {
  render() {
    return (
      <div>
        {this.props.watchlist.map(stock => {
          return <li>{stock.ticker}</li>;
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
