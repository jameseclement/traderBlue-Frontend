import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class TradingData extends Component {
  render() {
    return !this.props.stock ? (
      <div>Loading</div>
    ) : (
      <table>
        <tr>
          <th colspan="2">{`${this.props.stock.quote.companyName} Info`}</th>
        </tr>
        <tr>
          <td>Latest Price</td>
          <td>${this.props.stock.quote.latestPrice}</td>
        </tr>
        <tr>
          <td>Day Change ($)</td>
          <td>${this.props.stock.quote.change}</td>
        </tr>
        <tr>
          <td>Day Change (%)</td>
          <td>{(this.props.stock.quote.changePercent * 100).toFixed(2)}%</td>
        </tr>
        <tr>
          <td>Day Range</td>
          <td>
            ${`${this.props.stock.quote.high} - ${this.props.stock.quote.low}`}
          </td>
        </tr>
        <tr>
          <td>Market Cap </td>
          <td>
            ${`${(this.props.stock.quote.marketCap / 1000000000).toFixed(2)}`}B
          </td>
        </tr>
        <tr>
          <td>P/E Ratio</td>
          <td>{this.props.stock.quote.peRatio}</td>
        </tr>
        <tr>
          <td>52 Week Range</td>
          <td>
            ${this.props.stock.quote.week52Low.toFixed(2)}-
            {this.props.stock.quote.week52High.toFixed(2)}
          </td>
        </tr>
        <tr>
          <td>Day Low</td>
          <td>${this.props.stock.quote.low}</td>
        </tr>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(TradingData)
);
