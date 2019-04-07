import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import SearchBar from "../components/searchBar";
import SecurityChart from "../components/securityChart";
import NewsContainer from "../components/newsContainer";
import TradingData from "../components/tradingData";
import TradeControls from "../components/tradeControls";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class TradePage extends Component {
  render() {
    // let ticker = this.props.match.params.id;
    return (
      <div>
        <h1>Trade</h1>
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
// const mapStateToProps = state => {
//   return {
//     ticker: state.stock.ticker
//   };
// };
export default TradePage;
