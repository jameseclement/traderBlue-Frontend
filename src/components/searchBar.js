import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSearchChange } from "../redux/actions";
import { searching } from "../redux/actions";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.props.handleSearchChange(e.target.value)}
          value={this.props.search}
        />
        <button onClick={() => this.props.searching(this.props.search)}>
          SEARCH
        </button>
      </div>
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
    },
    searching: searchTerm => {
      dispatch(searching(searchTerm));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar)
);
