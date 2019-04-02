import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import SearchBar from "../components/searchBar";
import SecurityChart from "../components/securityChart";
import NewsContainer from "../components/newsContainer";
import TradingData from "../components/tradingData";

class TradePage extends Component {
  render() {
    return (
      <div>
        <Watchlist />
        <SecurityChart />
        <NewsContainer />
        <SearchBar />
        <TradingData />
      </div>
    );
  }
}

export default TradePage;
