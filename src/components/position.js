import React, { Component } from "react";

class Position extends Component {
  render() {
    let shares = this.props.position.quantity;
    let ticker = this.props.position.ticker;
    let currentPrice = this.props.position.info.quote.latestPrice;
    let cost_basis = this.props.position.cost_basis;
    let totalValue = shares * currentPrice;
    let totalCost = shares * cost_basis;
    let totalGain = totalValue - totalCost;
    let totalGainPercent = 100 * (totalGain / totalCost);
    let dayGain = this.props.position.info.quote.change;
    let dayGainPercent = 100 * this.props.position.info.quote.changePercent;

    return (
      <tr>
        <td>{ticker}</td>
        <td>{shares}</td>
        <td>{currentPrice}</td>
        <td>${cost_basis}</td>
        <td>${totalValue}</td>
        <td>${totalCost}</td>
        <td>${dayGain * shares}</td>
        <td>%{dayGainPercent}</td>
        <td>${totalGain}</td>
        <td>{totalGainPercent}%</td>
      </tr>
    );
  }
}

export default Position;
