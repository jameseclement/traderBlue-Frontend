import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import SearchBar from "../components/searchBar";
import NewsContainer from "../components/newsContainer";
import PopularList from "../components/popularList";

class ResearchPage extends Component {
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

export default ResearchPage;
