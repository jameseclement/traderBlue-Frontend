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
    case "REDUCED CASH":
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
    case "FETCHED_POSITION":
      return action.position;
    default:
      return state;
  }
};

const stockReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_STOCK":
      return action.stockInfo;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  watchlist: watchlistReducer,
  portfolio: portfolioReducer,
  loading: loadingReducer,
  stock: stockReducer,
  position: positionReducer
});

export default rootReducer;
