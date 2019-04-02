const URL = `http://localhost:3000`;
//
function fetchingWatchlist() {
  return dispatch => {
    fetch(`${URL}/watchlist_items`)
      .then(res => res.json())
      .then(items => {
        console.log(items);
        dispatch(fetchedWatchlist(items));
      });
  };
}

function fetchingPortfolio() {
  return dispatch => {
    fetch(`${URL}/portfolios`)
      .then(res => res.json())
      .then(portfolio => {
        console.log(portfolio);
        dispatch(fetchedPortfolio(portfolio));
      });
  };
}

function fetchedPortfolio(portfolio) {
  return { type: "FETCHED_PORTFOLIO", portfolio };
}

function fetchedWatchlist(items) {
  return { type: "FETCHED_WATCHLIST", items };
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
  fetchingPortfolio
  // changeSearchText,
  // votingForPainting,
  // updatePainting,
  // fetchingPaintings
};
