import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchingStock } from "../redux/actions";

class NewsContainer extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.fetchingStock(this.props.match.params.id);
  }
  render() {
    return <div>News Goes here</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingStock: stock => {
      dispatch(fetchingStock(stock));
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
    null,
    mapDispatchToProps
  )(NewsContainer)
);
