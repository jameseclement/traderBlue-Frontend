import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import NewsContainer from "../components/newsContainer";
import PopularList from "../components/popularList";
import { fetchingWatchlist } from "../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class ResearchPage extends Component {
  componentDidMount() {
    this.props.fetchingWatchlist(this.props.user.id);
  }

  render() {
    return (
      <div>
        <NewsContainer />
        <PopularList />

        <Watchlist />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingWatchlist: userId => {
      dispatch(fetchingWatchlist(userId));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResearchPage)
);
