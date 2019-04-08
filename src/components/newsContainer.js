import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class NewsContainer extends PureComponent {
  render() {
    return !this.props.portfolio ? (
      <div>Loading</div>
    ) : (
      <div>
        Watchlist News
        {this.props.watchlist.map(item => {
          return item.news.map(news => {
            return (
              <li>
                <a href={`${news.url}`}>{news.headline}</a>
              </li>
            );
          });
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    portfolio: state.portfolio,
    watchlist: state.watchlist
  };
};

export default withRouter(connect(mapStateToProps)(NewsContainer));
