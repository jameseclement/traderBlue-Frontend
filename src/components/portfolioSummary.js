import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PortfolioSummary extends Component {
  render() {
    if (!this.props.portfolio.positions) {
      return <div>Loading Positions </div>;
    } else {
      let investments = this.props.portfolio.positions.map(p => {
        return p.quantity * p.info.quote.latestPrice;
      });
      let invested = investments.reduce((x, y) => {
        return x + y;
      });
      return (
        <div>
          Cash:${this.props.portfolio.cash.toFixed(2)}
          <br />
          Investments:${invested.toFixed(2)}
          <br />
          Total:${(this.props.portfolio.cash + invested).toFixed(2)}
        </div>
      );
    }
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
