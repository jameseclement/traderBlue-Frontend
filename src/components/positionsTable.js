import React, { Component } from "react";
import Position from "./position";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class PositionsTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Symbol</td>
            <td>Name</td>
            <td>Shares</td>
            <td>Current Price</td>
            <td>Purchase Price</td>
            <td>Total Value</td>
            <td>% G/L Day</td>
            <td>% G/L Day</td>
            <td>$ G/L Total</td>
            <td>% G/L Total</td>
          </tr>
          <Position />
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => {
  return {
    portfolio: state.portfolio
  };
};
export default withRouter(connect(mapStateToProps)(PositionsTable));
