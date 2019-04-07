import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import SearchBar from "../components/searchBar";
import SecurityChart from "../components/securityChart";
import NewsContainer from "../components/newsContainer";
import TradingData from "../components/tradingData";
import TradeControls from "../components/tradeControls";

class TradePage extends Component {
  render() {
    return (
      <div>
        <h1>Trade MSFT</h1>
        <br />
        <br />
        <br />
        <br />
        <TradeControls />
        <TradingData />
        <br />
        <br />
        <br />
        <br />
        <h2>My Watchlist</h2>
        <Watchlist />
        <SecurityChart />
        <NewsContainer />
        <SearchBar />
      </div>
    );
  }
}

export default TradePage;
