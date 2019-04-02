import { combineReducers } from "redux";

const watchlistReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_WATCHLIST":
      return action.items;
    default:
      return state;
  }
};
const positionsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCHED_POSITIONS":
      return action.positions;
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
  positions: positionsReducer
});

export default rootReducer;
