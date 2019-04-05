import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import PositionsTable from "../components/positionsTable";
import SearchBar from "../components/searchBar";
import PortfolioChart from "../components/portfolioChart";
import PortfolioSummary from "../components/portfolioSummary";

class PortfolioPage extends Component {
  render() {
    return (
      <div>
        <Watchlist />
        <PositionsTable />
        <PortfolioSummary />
        <SearchBar />
        <PortfolioChart />
      </div>
    );
  }
}

export default PortfolioPage;
