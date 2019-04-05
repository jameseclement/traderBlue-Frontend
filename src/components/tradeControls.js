import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postingPosition } from "../redux/actions";
import { fetchingStock } from "../redux/actions";

class TradeControls extends Component {
  constructor() {
    super();
    this.state = {
      shares: 0
    };
  }

  componentDidMount() {
    this.props.fetchingStock(this.props.match.params.id);
  }

  render() {
    let ticker = this.props.match.params.id;
    return this.props.loading ? (
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
            debugger;
            for (var i = 0; i < this.props.portfolio.positions.length; i++) {
              if (
                Object.values(this.props.portfolio.positions[i]).includes(
                  ticker
                )
              ) {
                alert("you already own this!");
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
    }
  };
};

const mapStateToProps = state => {
  return {
    stock: state.stock,
    loading: state.loading,
    portfolio: state.portfolio
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TradeControls)
);
