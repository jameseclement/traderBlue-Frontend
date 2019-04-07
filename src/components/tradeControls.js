import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postingPosition } from "../redux/actions";
import { fetchingStock } from "../redux/actions";
import { fetchingPosition } from "../redux/actions";
import { adjustingPosition } from "../redux/actions";
import { closingPosition } from "../redux/actions";
import { adjustingCash } from "../redux/actions";

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

  buyStock = () => {
    let price = this.props.stock.quote.latestPrice;
    let shares = parseInt(this.state.shares);
    let ticker = this.props.match.params.id;
    let purchaseCost = shares * price;
    let availableCash = this.props.portfolio.cash;
    if (purchaseCost > availableCash) {
      alert("Not enough cash to buy this many shares");
    } else {
      let newCash = availableCash - purchaseCost;
      this.props.adjustingCash(newCash);

      if (this.props.position.ticker === ticker) {
        let currentShares = this.props.position.quantity;
        let newTotalShares =
          parseInt(currentShares) + parseInt(this.state.shares);
        let previousPositionCost =
          parseInt(this.props.position.quantity) *
          this.props.position.cost_basis;
        let newCostBasis =
          (previousPositionCost + purchaseCost) / newTotalShares;

        this.props.adjustingPosition(ticker, newTotalShares, newCostBasis, 1);
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
    }
  };

  sellStock = () => {
    let price = this.props.stock.quote.latestPrice;
    let shares = parseInt(this.state.shares);
    let ticker = this.props.match.params.id;
    let saleValue = shares * price;
    let availableCash = this.props.portfolio.cash;
    if (shares > this.props.position.quantity) {
      alert("You can't sell more shares than you own");
    } else {
      let newCash = availableCash + saleValue;
      this.props.adjustingCash(newCash);

      if (this.props.position.ticker === ticker) {
        let currentShares = this.props.position.quantity;
        let newTotalShares =
          parseInt(currentShares) - parseInt(this.state.shares);
        let previousPositionCost =
          parseInt(this.props.position.quantity) *
          this.props.position.cost_basis;
        let newCostBasis = (previousPositionCost - saleValue) / newTotalShares;

        this.props.adjustingPosition(ticker, newTotalShares, newCostBasis, 1);
        return null;
      } else {
        alert("You dont own this stock");
        return null;
      }
    }
  };

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
            this.buyStock();
          }}
        >
          Buy (select number of shares)
        </button>
        <button
          onClick={() => {
            this.sellStock();
          }}
        >
          Sell (select number of shares)
        </button>
        <button
          onClick={() => {
            this.props.closingPosition(ticker);
          }}
        >
          Close Position (sell all shares)
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
    adjustingPosition: (ticker, newTotal, costBasis, portfolio_id) => {
      dispatch(adjustingPosition(ticker, newTotal, costBasis, portfolio_id));
    },
    closingPosition: ticker => {
      dispatch(closingPosition(ticker));
    },
    adjustingCash: newCash => {
      dispatch(adjustingCash(newCash));
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
