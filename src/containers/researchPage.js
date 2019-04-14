import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import NewsContainer from "../components/newsContainer";
import PopularList from "../components/popularList";
import { fetchingWatchlist } from "../redux/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class ResearchPage extends Component {
  componentDidMount() {
    this.props.fetchingWatchlist();
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

const mapDispatchToProps = dispatch => {
  return {
    fetchingWatchlist: () => {
      dispatch(fetchingWatchlist());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ResearchPage)
);
