import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchingStock } from "../redux/actions";

class NewsContainer extends Component {
  componentDidMount() {
    debugger;
    this.props.fetchingStock(this.props.match.params.id);
  }
  render() {
    let ticker = this.props.match.params.id;
    return <div>News Goes here</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
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
  )(NewsContainer)
);
