import React, { Component } from "react";
import Position from "./position";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { postingPosition } from "../redux/actions";
import { adjustingCash } from "../redux/actions";
import { fetchingUser } from "../redux/actions";

class PositionsTable extends Component {
  render() {
    return !this.props.portfolio.positions ? (
      <div class="ui active text centered inline loader">Loading Positions</div>
    ) : (
      <div>
        <table className="ui selectable table">
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {this.props.portfolio.positions.map(position => {
              return <Position key={position.id} position={position} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postingPosition: (ticker, quantity, price, portfolioId, userId) => {
      dispatch(postingPosition(ticker, quantity, price, portfolioId, userId));
    },
    adjustingCash: (newCash, portfolioId, userId) => {
      dispatch(adjustingCash(newCash, portfolioId, userId));
    },
    fetchingUser: userId => {
      dispatch(fetchingUser(userId));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    portfolio: state.portfolio,
    user: state.user
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PositionsTable)
);
