import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Table } from "semantic-ui-react";
var numeral = require("numeral");

class PortfolioSummary extends Component {
  render() {
    if (!this.props.portfolio.positions) {
      return (
        <div class="ui active text centered inline loader">
          Loading Portfolio Summary
        </div>
      );
    } else if (this.props.portfolio.positions.length === 0) {
      let invested = 0;
      return (
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Portfolio Summary</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row className="">
              <Table.Cell className="">Cash</Table.Cell>
              <Table.Cell className="">
                {numeral(this.props.portfolio.cash).format("$0,0.00")}
              </Table.Cell>
            </Table.Row>
            <Table.Row className="">
              <Table.Cell className="">Invested</Table.Cell>
              <Table.Cell className="">
                {numeral(invested).format("$0,0.00")}
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row className="">
              <Table.Cell className="">Total</Table.Cell>
              <Table.Cell className="">
                {numeral(this.props.portfolio.cash + invested).format(
                  "$0,0.00"
                )}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
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
                <td className="">
                  {numeral(this.props.portfolio.cash).format("$0,0.00")}
                </td>
              </tr>
              <tr className="">
                <td className="">Invested</td>
                <td className="">{numeral(invested).format("$0,0.00")}</td>
              </tr>
              <tr className="">
                <td className="">Total</td>
                <td className="">
                  {numeral(this.props.portfolio.cash + invested).format(
                    "$0,0.00"
                  )}
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
