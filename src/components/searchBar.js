import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { handleSearchChange } from "../redux/actions";
import { searching } from "../redux/actions";

class SearchBar extends Component {
  routeChange = () => {
    let path = `/trade/${this.props.search}`;
    this.props.history.push(path);
  };

  render() {
    return (
      <div>
        <div class="ui labeled input">
          <div class="ui label label">TICKER:</div>
          <input
            type="text"
            onChange={e =>
              this.props.handleSearchChange(e.target.value.toUpperCase())
            }
            value={this.props.search}
            placeholder="MSFT..."
          />
        </div>

        <button
          className="ui button primary"
          onClick={() => {
            this.routeChange();
            this.props.searching(this.props.search);
          }}
        >
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
