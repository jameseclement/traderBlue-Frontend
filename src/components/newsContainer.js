import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { uniqBy } from "lodash";

class NewsContainer extends PureComponent {
  render() {
    return !this.props.portfolio ? (
      <div>Loading</div>
    ) : (
      <div>
        Watchlist News
        {uniqBy(this.props.watchlist, "ticker").map(item => {
          return item.news.map(news => {
            return (
              <li>
                <a
                  href={`${news.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {news.headline}
                </a>
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
