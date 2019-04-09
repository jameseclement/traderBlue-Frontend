import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import SearchBar from "../components/searchBar";
import SecurityChart from "../components/securityChart";
import StockNewsContainer from "../components/stockNewsContainer";
import TradingData from "../components/tradingData";
import TradeControls from "../components/tradeControls";
import MyTradeInfo from "../components/myTradeInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class TradePage extends Component {
  render() {
    // let ticker = this.props.match.params.id;
    return !this.props.match.params.id ? (
      <div>
        <h1>Select or Search for a Stock to trade</h1>
        <h3>My Stocks</h3>
        <div>
          {!this.props.portfolio.positions ? (
            <div>Loading</div>
          ) : (
            this.props.portfolio.positions.map(p => {
              return (
                <li>
                  {" "}
                  <Link to={`/trade/${p.ticker}`}>{p.ticker}</Link>
                </li>
              );
            })
          )}
        </div>
        <h3>My Watchlist</h3>
        <div>
          {!this.props.watchlist ? (
            <div>Loading</div>
          ) : (
            this.props.watchlist.map(p => {
              return (
                <li>
                  <Link to={`/trade/${p.ticker}`}>{p.ticker}</Link>
                </li>
              );
            })
          )}
        </div>
        <SearchBar />
      </div>
    ) : (
      <div>
        <h1> {!this.props.stock ? "" : this.props.stock.quote.companyName}</h1>
        <MyTradeInfo />

        <TradeControls />
        <TradingData />
        <StockNewsContainer />

        <br />
        <br />
        <br />
        <br />
        <h2>My Watchlist</h2>
        <Watchlist />
        <SecurityChart />
        <SearchBar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    watchlist: state.watchlist,
    stock: state.stock
  };
};

export default withRouter(connect(mapStateToProps)(TradePage));
