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

function loadingPortfolio() {
  return { type: "LOADING_PORTFOLIO" };
}

function fetchingPortfolio() {
  return dispatch => {
    dispatch(loadingPortfolio());
    fetch(`${URL}/users/1/portfolios/1`)
      .then(res => res.json())
      .then(portfolio => {
        console.log(portfolio);
        dispatch(fetchedPortfolio(portfolio));
      });
  };
}

function postingPosition(ticker, quantity, price, portfolioId) {
  return dispatch => {
    fetch("http://localhost:3000/api/v1/users/1/portfolios/1/positions", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({
        quantity: quantity,
        ticker: ticker,
        cost_basis: price,
        portfolio_id: portfolioId
      })
    })
      .then(res => res.json())
      .then(position => {
        console.log(position);
        dispatch(postedPosition(position));
      });
  };
}

function fetchingPosition(ticker) {
  return dispatch => {
    fetch(
      `http://localhost:3000/api/v1/users/1/portfolios/1/positions/${ticker}`
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
      `http://localhost:3000/api/v1/users/1/portfolios/1/positions/${ticker}`,
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

function adjustingCash(newCash) {
  return dispatch => {
    fetch(`${URL}/users/1/portfolios/1`, {
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

function closingPosition(ticker) {
  return dispatch => {
    fetch(
      `http://localhost:3000/api/v1/users/1/portfolios/1/positions/${ticker}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/JSON",
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(console.log);
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

function fetchedStock(stockInfo) {
  return { type: "FETCHED_STOCK", stockInfo };
}

function postedPosition(position) {
  return { type: "POSTED_POSITION", position };
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
//
// function loadingPainting() {
//   return { type: "LOADING_PAINTINGS" };
// }
//
// function votingForPainting(painting) {
//   return (dispatch, getState) => {
//     // let oldVotes = getState().paintings.find(p => p.id === paintingId).votes
//     fetch(`${URL}/${painting.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify({
//         votes: painting.votes + 1
//       })
//     })
//       .then(res => res.json())
//       .then(painting => {
//         dispatch(increaseVotes(painting.id));
//       });
//   };
// }
//
// //Problem 1: we HAVE to return {} from action creator
// //Problem 2: we don't have access to dispatch the funciton object
// //Want: return a process/function -> dispatch an action
//
// function changeSearchText(value) {
//   return { type: "CHANGE_SEARCH_TEXT", value: value };
// }
//
// function increaseVotes(paintingId) {
//   return { type: "INCREASE_VOTES", paintingId };
// }
//
// function updatePainting({ title, name, birthday, deathday, paintingId }) {
//   return {
//     type: "UPDATE_PAINTING",
//     payload: { title, name, birthday, deathday },
//     paintingId
//   };
// }
//
export {
  fetchingWatchlist,
  fetchingPortfolio,
  postingPosition,
  fetchingStock,
  fetchingPosition,
  adjustingPosition,
  closingPosition,
  adjustingCash

  // changeSearchText,
  // votingForPainting,
  // updatePainting,
  // fetchingPaintings
};
