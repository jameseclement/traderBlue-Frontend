const URL = `http://localhost:3000/api/v1`;
//
function fetchingWatchlist() {
  return dispatch => {
    fetch(`${URL}/watchlist_items`)
      .then(res => res.json())
      .then(items => {
        // console.log(items);
        dispatch(fetchedWatchlist(items));
      });
  };
}

function postingToWatchlist(ticker, portfolioId) {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/watchlist_items", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        ticker: ticker,
        portfolio_id: portfolioId
      })
    })
      .then(res => res.json())
      .then(item => {
        console.log(item);
        dispatch(postedToWatchlist(item));
      });
  };
}

function loadingPortfolio() {
  return { type: "LOADING_PORTFOLIO" };
}

function fetchingPortfolio(portfolioId, userId) {
  return dispatch => {
    dispatch(loadingPortfolio());
    fetch(`${URL}/users/${userId}/portfolios/${portfolioId}`)
      .then(res => res.json())
      .then(portfolio => {
        console.log(portfolio);
        dispatch(fetchedPortfolio(portfolio));
      });
  };
}

function postingPosition(ticker, quantity, price, portfolioId, userId) {
  return dispatch => {
    fetch(
      `http://localhost:3000/api/v1/users/${userId}/portfolios/${portfolioId}/positions`,
      {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({
          quantity: quantity,
          ticker: ticker,
          cost_basis: price,
          portfolio_id: portfolioId
        })
      }
    )
      .then(res => res.json())
      .then(position => {
        console.log(position);
        dispatch(postedPosition(position));
      });
  };
}

function fetchingPosition(ticker, portfolioId) {
  return dispatch => {
    fetch(
      `http://localhost:3000/api/v1/users/1/portfolios/${portfolioId}/positions/${ticker}`
    )
      .then(res => res.json())
      .then(position => {
        console.log(position);
        dispatch(fetchedPosition(position));
      });
  };
}

function adjustingPosition(ticker, newTotal, costBasis, portfolioId) {
  return dispatch => {
    fetch(
      `http://localhost:3000/api/v1/users/1/portfolios/${portfolioId}/positions/${ticker}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/JSON",
          Accept: "application/json"
        },
        body: JSON.stringify({
          position: {
            quantity: newTotal,
            ticker: ticker,
            cost_basis: costBasis,
            portfolio_id: portfolioId
          }
        })
      }
    )
      .then(res => res.json())
      .then(position => {
        dispatch(postedPosition(position));
      });
  };
}

function adjustingCash(newCash, portfolioId) {
  return dispatch => {
    fetch(`${URL}/users/1/portfolios/${portfolioId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
        Accept: "application/json"
      },
      body: JSON.stringify({
        portfolio: {
          cash: newCash
        }
      })
    })
      .then(res => res.json())
      .then(portfolio => {
        console.log(portfolio);
        dispatch(adjustedCash(portfolio));
      });
  };
}

function closingPosition(ticker, portfolioId) {
  return dispatch => {
    fetch(
      `http://localhost:3000/api/v1/users/1/portfolios/${portfolioId}/positions/${ticker}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/JSON",
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(position => {
        console.log(position);
        dispatch(closedPosition(position));
      });
  };
}

function fetchingStock(ticker) {
  return dispatch => {
    fetch(`${URL}/stocks/${ticker}`)
      .then(res => res.json())
      .then(stockInfo => {
        console.log(stockInfo);
        dispatch(fetchedStock(stockInfo));
      });
  };
}

function searching(searchTerm, portfolioId) {
  return dispatch => {
    fetch(`${URL}/stocks/${searchTerm}`)
      .then(res => res.json())
      .then(stockInfo => {
        console.log(stockInfo);
        dispatch(searchedStock(stockInfo));
        dispatch(fetchingPosition(searchTerm, portfolioId));
      });
  };
}

function fetchedStock(stockInfo) {
  return { type: "FETCHED_STOCK", stockInfo };
}

function searchedStock(stockInfo) {
  return { type: "SEARCHED_STOCK", stockInfo };
}

function postedPosition(position) {
  return { type: "POSTED_POSITION", position };
}
function closedPosition(position) {
  return { type: "CLOSED_POSITION", position };
}

function fetchedPosition(position) {
  return { type: "FETCHED_POSITION", position };
}

function fetchedPortfolio(portfolio) {
  return { type: "FETCHED_PORTFOLIO", portfolio };
}

function fetchedWatchlist(items) {
  return { type: "FETCHED_WATCHLIST", items };
}

function adjustedCash(portfolio) {
  return { type: "ADJUSTED_CASH", portfolio };
}

function handleSearchChange(text) {
  return { type: "HANDLE_SEARCH_CHANGE", text };
}

function postedToWatchlist(item) {
  return { type: "POSTED_TO_WATCHLIST", item };
}

function selectUser(userId) {
  return { type: "SELECT_USER", userId };
}

export {
  fetchingWatchlist,
  fetchingPortfolio,
  postingPosition,
  fetchingStock,
  fetchingPosition,
  adjustingPosition,
  closingPosition,
  adjustingCash,
  handleSearchChange,
  searching,
  postingToWatchlist,
  selectUser
};
