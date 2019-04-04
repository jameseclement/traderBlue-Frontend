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
    let symbol = this.props.match.params.id;
    return (
      <form>
        <input
          type="number"
          name="shares"
          value={this.state.shares}
          onChange={e => this.setState({ shares: e.target.value })}
        />
        <br />
        <button
          onClick={() => {
            this.props.postingPosition(symbol, this.state.shares, 130.0, 1);
          }}
        >
          Buy
        </button>
      </form>
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
    stock: state.stock
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TradeControls)
);
