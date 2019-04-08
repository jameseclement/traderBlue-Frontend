import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSearchChange } from "../redux/actions";

class SearchBar extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={e => this.props.handleSearchChange(e.target.value)}
        value={this.props.search}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchChange: text => {
      dispatch(handleSearchChange(text));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar)
);
