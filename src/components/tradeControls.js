import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postingPosition } from "../redux/actions";
import { fetchingStock } from "../redux/actions";
import { fetchingPosition } from "../redux/actions";
import { addingToPosition } from "../redux/actions";

class TradeControls extends Component {
  constructor() {
    super();
    this.state = {
      shares: 0
    };
  }

  componentDidMount() {
    this.props.fetchingStock(this.props.match.params.id);
    this.props.fetchingPosition(this.props.match.params.id);
  }

  render() {
    let ticker = this.props.match.params.id;
    return !this.props.position ? (
      <div>Loading</div>
    ) : (
      <div>
        <form>
          <input
            type="number"
            name="shares"
            value={this.state.shares}
            onChange={e => this.setState({ shares: e.target.value })}
          />
          <br />
        </form>
        <button
          onClick={() => {
            if (this.props.position.ticker == ticker) {
              let currentShares = this.props.position.quantity;
              let newTotalShares =
                parseInt(currentShares) + parseInt(this.state.shares);
              let previousPositionCost =
                parseInt(this.props.position.quantity) *
                this.props.position.cost_basis;
              let purchaseCost =
                parseInt(this.state.shares) *
                this.props.stock.quote.latestPrice;
              let newCostBasis =
                (previousPositionCost + purchaseCost) / newTotalShares;

              this.props.addingToPosition(
                ticker,
                newTotalShares,
                newCostBasis,
                1
              );
              return null;
            } else {
              console.log("new position");
              this.props.postingPosition(
                ticker,
                this.state.shares,
                this.props.stock.quote.latestPrice,
                1
              );
              return null;
            }
          }}
        >
          Buy
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postingPosition: (ticker, quantity, price, portfolio_id) => {
      dispatch(postingPosition(ticker, quantity, price, portfolio_id));
    },
    fetchingStock: ticker => {
      dispatch(fetchingStock(ticker));
    },
    fetchingPosition: ticker => {
      dispatch(fetchingPosition(ticker));
    },
    addingToPosition: (ticker, newTotal, costBasis, portfolio_id) => {
      dispatch(addingToPosition(ticker, newTotal, costBasis, portfolio_id));
    }
  };
};

const mapStateToProps = state => {
  return {
    stock: state.stock,
    loading: state.loading,
    portfolio: state.portfolio,
    position: state.position
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TradeControls)
);
