import React, { Component } from "react";
import Position from "./position";
class PositionsTable extends Component {
  render() {
    return (
      <table>
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
      </table>
    );
  }
}

export default PositionsTable;
