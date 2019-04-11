import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postingPosition } from "../redux/actions";
import { fetchingStock } from "../redux/actions";
import { fetchingPosition } from "../redux/actions";
import { adjustingPosition } from "../redux/actions";
import { closingPosition } from "../redux/actions";
import { adjustingCash } from "../redux/actions";
import { postingToWatchlist } from "../redux/actions";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import MyTradeInfo from "../components/myTradeInfo";

class TradeControls extends Component {
  constructor() {
    super();
    this.state = {
      shares: null,
      modalOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchingStock(this.props.match.params.id);
    this.props.fetchingPosition(
      this.props.match.params.id,
      this.props.portfolio.id
    );
  }
  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  handleWatchlistButton = () => {
    this.props.postingToWatchlist(this.props.match.params.id, 1);
  };

  buyStock = () => {
    let price = this.props.stock.quote.latestPrice;
    let shares = parseInt(this.state.shares);
    let ticker = this.props.match.params.id;
    let purchaseCost = shares * price;
    let availableCash = this.props.portfolio.cash;
    if (purchaseCost > availableCash) {
      alert("Not enough cash to buy this many shares");
    } else if (shares < 1 || this.state.shares == null) {
      alert("Please enter a number greater than 1");
    } else {
      let newCash = availableCash - purchaseCost;
      this.props.adjustingCash(newCash, this.props.portfolio.id);

      if (!!this.props.position && this.props.position.ticker === ticker) {
        let currentShares = this.props.position.quantity;
        let newTotalShares =
          parseInt(currentShares) + parseInt(this.state.shares);
        let previousPositionCost =
          parseInt(this.props.position.quantity) *
          this.props.position.cost_basis;
        let newCostBasis =
          (previousPositionCost + purchaseCost) / newTotalShares;

        this.props.adjustingPosition(
          ticker,
          newTotalShares,
          newCostBasis,
          this.props.portfolio.id
        );
        return null;
      } else {
        console.log("new position");
        this.props.postingPosition(
          ticker,
          this.state.shares,
          this.props.stock.quote.latestPrice,
          this.props.portfolio.id
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
    } else if (shares < 1 || this.state.shares == null) {
      alert("Please enter a number greater than 1");
    } else {
      let newCash = availableCash + saleValue;

      this.props.adjustingCash(newCash, this.props.portfolio.id);

      if (!!this.props.position && this.props.position.ticker === ticker) {
        let currentShares = this.props.position.quantity;
        let newTotalShares =
          parseInt(currentShares) - parseInt(this.state.shares);
        let previousPositionCost =
          parseInt(this.props.position.quantity) *
          this.props.position.cost_basis;
        let newCostBasis = (previousPositionCost - saleValue) / newTotalShares;

        this.props.adjustingPosition(
          ticker,
          newTotalShares,
          newCostBasis,
          this.props.portfolio.id
        );
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
    this.props.adjustingCash(newCash, this.props.portfolio.id);
    this.props.closingPosition(ticker);
  };

  render() {
    return (
      <Fragment>
        <Modal
          trigger={<Button onClick={this.handleOpen}>Place an Order!</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size="small"
        >
          <Header icon="browser" content="Select Order Type" />
          <Modal.Content>
            <MyTradeInfo />
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
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> I'm Done!
            </Button>
          </Modal.Actions>
        </Modal>
        <Button onClick={this.handleWatchlistButton} icon labelPosition="left">
          Add to Watchlist
          <Icon name="plus" />
        </Button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postingPosition: (ticker, quantity, price, portfolioId) => {
      dispatch(postingPosition(ticker, quantity, price, portfolioId));
    },
    fetchingStock: ticker => {
      dispatch(fetchingStock(ticker));
    },
    fetchingPosition: (ticker, portfolioId) => {
      dispatch(fetchingPosition(ticker, portfolioId));
    },
    adjustingPosition: (ticker, newTotal, costBasis, portfolio_id) => {
      dispatch(adjustingPosition(ticker, newTotal, costBasis, portfolio_id));
    },
    closingPosition: ticker => {
      dispatch(closingPosition(ticker));
    },
    adjustingCash: (newCash, portfolioId) => {
      dispatch(adjustingCash(newCash, portfolioId));
    },
    postingToWatchlist: (ticker, portfolioId) => {
      dispatch(postingToWatchlist(ticker, portfolioId));
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
