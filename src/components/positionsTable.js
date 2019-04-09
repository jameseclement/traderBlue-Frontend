import React, { Component } from "react";
import Position from "./position";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class PositionsTable extends Component {
  render() {
    return !this.props.portfolio.positions ? (
      <div>Loading Positions </div>
    ) : (
      <table className="ui table">
        <thead>
          <th>Ticker</th>
          <th>Shares</th>
          <th>Current Price</th>
          <th>Cost Basis</th>
          <th>Total Value</th>
          <th>Total Cost</th>
          <th>$ G/L Day</th>
          <th>% G/L Day</th>
          <th>$ G/L Total</th>
          <th>% G/L Total</th>
        </thead>
        <tbody>
          {this.props.portfolio.positions.map(position => {
            return <Position key={position.id} position={position} />;
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
