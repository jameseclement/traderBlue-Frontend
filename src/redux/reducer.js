import { combineReducers } from "redux";

const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_WATCHLIST":
      return action.items;
    case "POSTED_TO_WATCHLIST":
      return [...state, action.item];
    default:
      return state;
  }
};
const portfolioReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCHED_PORTFOLIO":
      return action.portfolio;
    case "ADJUSTED_CASH":
      return action.portfolio;
    case "POSTED_POSITION":
      return { ...state, positions: [...state.positions, action.position] };

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
    case "CLOSED_POSITION":
      return null;
    default:
      return state;
  }
};

const stockReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCHED_STOCK":
      return action.stockInfo;
    case "SEARCHED_STOCK":
      return action.stockInfo;
    default:
      return state;
  }
};

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "HANDLE_SEARCH_CHANGE":
      return action.text;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  watchlist: watchlistReducer,
  portfolio: portfolioReducer,
  loading: loadingReducer,
  stock: stockReducer,
  position: positionReducer,
  search: searchReducer
});

export default rootReducer;
