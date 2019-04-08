import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import SearchBar from "../components/searchBar";
import SecurityChart from "../components/securityChart";
import NewsContainer from "../components/newsContainer";
import TradingData from "../components/tradingData";
import TradeControls from "../components/tradeControls";
import MyTradeInfo from "../components/myTradeInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class TradePage extends Component {
  render() {
    // let ticker = this.props.match.params.id;
    return !this.props.match.params.id ? (
      <div>Loading</div>
    ) : (
      <div>
        <h1>Trade {this.props.match.params.id}</h1>
        <br />
        <br />
        <br />
        <br />
        <TradeControls />
        <TradingData />
        <MyTradeInfo />

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
export default withRouter(TradePage);
