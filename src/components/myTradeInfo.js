import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class MyTradeInfo extends Component {
  render() {
    return !this.props.portfolio.cash ? (
      <div>loading</div>
    ) : (
      <div>
        <h3>
          Current Position:{" "}
          {this.props.position ? this.props.position.quantity : "0"} Shares
        </h3>

        <h3>Available Cash: ${this.props.portfolio.cash.toFixed(2)}</h3>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    position: state.position,
    portfolio: state.portfolio
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(MyTradeInfo)
);
