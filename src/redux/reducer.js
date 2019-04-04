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

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "LOADING_PORTFOLIO":
      return true;
    case "FETCHED_PORTFOLIO":
      return false;
    default:
      return state;
  }
};

const positionReducer = (state = [], action) => {
  switch (action.type) {
    case "POSTED_POSITION":
      return action.position;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  watchlist: watchlistReducer,
  portfolio: portfolioReducer,
  loading: loadingReducer
});

export default rootReducer;
