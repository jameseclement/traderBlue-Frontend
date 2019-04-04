import React, { Component } from "react";
import { Link } from "react-router-dom";
class Position extends Component {
  render() {
    let shares = this.props.position.quantity;
    let ticker = this.props.position.ticker;
    let currentPrice = this.props.position.info.quote.latestPrice;
    let cost_basis = this.props.position.cost_basis;
    let totalValue = (shares * currentPrice).toFixed(2);
    let totalCost = shares * cost_basis;
    let totalGain = totalValue - totalCost;
    let totalGainPercent = (100 * (totalGain / totalCost)).toFixed(2);
    let dayGain = this.props.position.info.quote.change.toFixed(2);
    let dayGainPercent = (
      100 * this.props.position.info.quote.changePercent
    ).toFixed(2);

    return (
      <tr>
        <td>
          <Link to={`/trade/${ticker}`}>{ticker}</Link>
        </td>
        <td>{shares}</td>
        <td>{currentPrice}</td>
        <td>${cost_basis}</td>
        <td>${totalValue}</td>
        <td>${totalCost}</td>
        <td>${(dayGain * shares).toFixed(2)}</td>
        <td>%{dayGainPercent}</td>
        <td>${totalGain}</td>
        <td>{totalGainPercent}%</td>
      </tr>
    );
  }
}

export default Position;
