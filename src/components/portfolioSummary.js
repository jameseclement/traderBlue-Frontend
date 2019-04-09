import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class PortfolioSummary extends Component {
  render() {
    if (!this.props.portfolio.positions) {
      return <div>Loading Positions </div>;
    } else if (this.props.portfolio.positions.length === 0) {
      let invested = 0;
      return (
        <div>
          <table className="ui striped table">
            <thead>
              <tr className="">
                <th colSpan="2" className="">
                  Portfolio Summary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="">Cash</td>
                <td className="">${this.props.portfolio.cash.toFixed(2)}</td>
              </tr>
              <tr className="">
                <td className="">Invested</td>
                <td className="">${invested.toFixed(2)}</td>
              </tr>
              <tr className="">
                <td className="">Total</td>
                <td className="">
                  ${(this.props.portfolio.cash + invested).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      let investments = this.props.portfolio.positions.map(p => {
        return p.quantity * p.info.quote.latestPrice;
      });
      let invested = investments.reduce((x, y) => {
        return x + y;
      });

      return (
        <div>
          <table className="ui striped table">
            <thead>
              <tr className="">
                <th colSpan="2" className="">
                  Portfolio Summary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="">Cash</td>
                <td className="">${this.props.portfolio.cash.toFixed(2)}</td>
              </tr>
              <tr className="">
                <td className="">Invested</td>
                <td className="">${invested.toFixed(2)}</td>
              </tr>
              <tr className="">
                <td className="">Total</td>
                <td className="">
                  ${(this.props.portfolio.cash + invested).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
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
