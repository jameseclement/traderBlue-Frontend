import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PortfolioSummary extends Component {
  render() {
    // let investements = this.props.portfolio.positions.map(p => {
    //   return p.quantity * p.info.quote.latestPrice;
    // });

    return (
      <div>
        Cash:{this.props.portfolio.cash}
        <br />
        Investments:{this.props.portfolio}
        <br />
        Total:
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    portfolio: state.portfolio
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(PortfolioSummary)
);
