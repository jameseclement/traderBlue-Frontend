import { combineReducers } from "redux";

const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_WATCHLIST":
      return action.items;
    default:
      return state;
  }
};
const portfolioReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_PORTFOLIO":
      return action.portfolio;
    default:
      return state;
  }
};

// const reducer2 = (oldState, action) => {
//   switch (action.type) {
//   }
// };

const rootReducer = combineReducers({
  watchlist: watchlistReducer,
  portfolio: portfolioReducer
});

export default rootReducer;
