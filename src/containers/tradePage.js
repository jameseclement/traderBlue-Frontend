import React, { Component } from "react";
import Watchlist from "../components/watchlist";
import SecurityChart from "../components/securityChart";
import StockNewsContainer from "../components/stockNewsContainer";
import TradingData from "../components/tradingData";
import TradeControls from "../components/tradeControls";
import MyTradeInfo from "../components/myTradeInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import TradingViewWidget from "react-tradingview-widget";
import { fetchingWatchlist } from "../redux/actions";

class TradePage extends Component {
  componentDidMount() {
    this.props.fetchingWatchlist();
  }
  render() {
    // let ticker = this.props.match.params.id;
    return !this.props.match.params.id ? (
      <div>
        <h1>Select or Search for a Stock to trade</h1>
        <h3>My Stocks</h3>
        <div>
          {!this.props.portfolio.positions ? (
            <div>Select a portfolio to view your stocks</div>
          ) : (
            <Button.Group vertical>
              {this.props.portfolio.positions.map(p => {
                return (
                  <Button>
                    {" "}
                    <Link to={`/trade/${p.ticker}`}>{p.ticker}</Link>
                  </Button>
                );
              })}
            </Button.Group>
          )}
        </div>
        <Watchlist />
      </div>
    ) : (
      <div>
        <h1> {!this.props.stock ? "" : this.props.stock.quote.companyName}</h1>
        <MyTradeInfo />
        <TradeControls />

        <TradingViewWidget symbol={`${this.props.match.params.id}`} />
        <TradingData />

        <StockNewsContainer />

        <Watchlist />
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

const mapDispatchToProps = dispatch => {
  return {
    fetchingWatchlist: () => {
      dispatch(fetchingWatchlist());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TradePage)
);
