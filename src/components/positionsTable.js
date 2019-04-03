import React, { Component } from "react";
import Position from "./position";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class PositionsTable extends Component {
  render() {
    console.log(this.props);
    return this.props.loading ? (
      <div>Loading... </div>
    ) : (
      <table>
        <tbody>
          <tr>
            <td>Ticker</td>
            <td>Shares</td>
            <td>Current Price</td>
            <td>Cost Basis</td>
            <td>Total Value</td>
            <td>Total Cost</td>
            <td>% G/L Day</td>
            <td>% G/L Day</td>
            <td>$ G/L Total</td>
            <td>% G/L Total</td>
          </tr>
          {this.props.portfolio.map(position => {
            return <Position position={position} />;
          })}
        </tbody>
      </table>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    portfolio: state.portfolio
  };
};
export default withRouter(connect(mapStateToProps)(PositionsTable));
