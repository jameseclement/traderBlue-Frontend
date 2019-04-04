import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postingPosition } from "../redux/actions";

class TradeControls extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.postingPosition();
        }}
      >
        Buy 1 Share of Ford
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postingPosition: (ticker, quantity, price) => {
      dispatch(postingPosition(ticker, quantity, price));
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TradeControls)
);
