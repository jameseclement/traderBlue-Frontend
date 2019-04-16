import React, { Component } from "react";
import Watchlist from "../components/watchlist";
// import SecurityChart from "../components/securityChart";
import StockNewsContainer from "../components/stockNewsContainer";
import TradingData from "../components/tradingData";
import TradeControls from "../components/tradeControls";
import MyTradeInfo from "../components/myTradeInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Card, Grid } from "semantic-ui-react";
import TradingViewWidget from "react-tradingview-widget";
import { fetchingWatchlist } from "../redux/actions";
import WatchlistItem from "../components/watchlistItem";
import { uniqBy } from "lodash";

class TradePage extends Component {
  componentDidMount() {
    this.props.fetchingWatchlist(this.props.user.id);
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
            <Card.Group itemsPerRow={3} vertical>
              {this.props.portfolio.positions.map(p => {
                return (
                  <Card color="blue" as={NavLink} to={`/trade/${p.ticker}`}>
                    <Card.Content>
                      <Card.Header as="h3" textAlign="center" color="blue">
                        {p.info.quote.companyName}
                      </Card.Header>
                    </Card.Content>
                  </Card>
                );
              })}
            </Card.Group>
          )}
        </div>
        <h3>My Watchlist</h3>
        <Card.Group itemsPerRow={3} vertical>
          {uniqBy(this.props.watchlist, "ticker").map(stock => {
            return <WatchlistItem key={stock.ticker} stock={stock} />;
          })}
        </Card.Group>
      </div>
    ) : (
      <Grid columns={5}>
        <Grid.Row stretched>
          <Grid.Column width={7}>
            <h1 className="ui blue header align center">
              {!this.props.stock ? "" : this.props.stock.quote.companyName}
            </h1>
            <TradingViewWidget
              symbol={`${this.props.match.params.id}`}
              autosize
            />
          </Grid.Column>
          <Grid.Column width={3}>
            <MyTradeInfo />
            <TradeControls />
            <TradingData />
          </Grid.Column>
          <Grid.Column width={3}>
            <Watchlist />
            <StockNewsContainer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    watchlist: state.watchlist,
    stock: state.stock,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchingWatchlist: userId => {
      dispatch(fetchingWatchlist(userId));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TradePage)
);
