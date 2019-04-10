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
      shares: null
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
    } else if (shares < 1) {
      alert("Please enter a number greater than 1");
    } else {
      let newCash = availableCash - purchaseCost;
      this.props.adjustingCash(newCash);

      if (!!this.props.position && this.props.position.ticker === ticker) {
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
    if (!this.props.position) {
      alert("You can't sell shares of a stock you don't own");
    } else if (shares > this.props.position.quantity) {
      alert("You can't sell more shares than you own");
    } else {
      let newCash = availableCash + saleValue;

      this.props.adjustingCash(newCash);

      if (!!this.props.position && this.props.position.ticker === ticker) {
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

  closePosition = () => {
    let price = this.props.stock.quote.latestPrice;
    let shares = this.props.position.quantity;
    let ticker = this.props.match.params.id;
    let saleValue = shares * price;
    let availableCash = this.props.portfolio.cash;
    let newCash = availableCash + saleValue;
    this.props.adjustingCash(newCash);
    this.props.closingPosition(ticker);
  };

  render() {
    return (
      <div>
        <div className="ui input column">
          <input
            type="number"
            name="shares"
            value={this.state.shares}
            onChange={e => this.setState({ shares: e.target.value })}
            min="1"
            placeholder="Shares"
          />
        </div>
        <br />
        <button
          className="ui button positive"
          onClick={() => {
            this.buyStock();
          }}
        >
          Buy
        </button>
        <div className="ui buttons negative">
          <button
            className="ui button"
            onClick={() => {
              this.sellStock();
            }}
          >
            Sell
          </button>
          <div className="or" />
          <button
            className="ui button"
            onClick={() => {
              !this.props.position
                ? alert("You dont have a position in this stock")
                : this.closePosition();
            }}
          >
            Close Position
          </button>
        </div>
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
