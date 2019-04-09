import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
var numeral = require("numeral");
class MyTradeInfo extends Component {
  render() {
    return !this.props.portfolio.cash ? (
      <div>loading</div>
    ) : (
      <div>
        <h2>
          Current Position:{" "}
          {this.props.position
            ? numeral(this.props.position.quantity).format("0,0")
            : "0"}{" "}
          Shares
        </h2>
        <h2>
          Available Cash: {numeral(this.props.portfolio.cash).format("$0,0.00")}
        </h2>
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
