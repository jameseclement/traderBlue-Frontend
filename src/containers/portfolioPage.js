import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import PositionsTable from "../components/positionsTable";
import SearchBar from "../components/searchBar";
import PortfolioChart from "../components/portfolioChart";

class PortfolioPage extends Component {
  render() {
    return (
      <div>
        <Watchlist />
        <PositionsTable />
        <SearchBar />
        <PortfolioChart />
      </div>
    );
  }
}

export default PortfolioPage;
