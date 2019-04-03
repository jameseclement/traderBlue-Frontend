import React, { Component } from "react";

class Position extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.position.ticker}</td>
        <td>{this.props.position.quantity}</td>
        <td>{this.props.position.stock.name}</td>
        <td>${this.props.position.cost_basis}</td>
        <td>TBD</td>
        <td>
          ${this.props.position.quantity * this.props.position.cost_basis}
        </td>
        <td>TBD</td>
        <td>TBD</td>
        <td>TBD</td>
        <td>TBD</td>
      </tr>
    );
  }
}

export default Position;
