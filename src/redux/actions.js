// const URL = `http://localhost:3000/api/v1/`;
//
// function fetchedPaintings(paintings) {
//   return { type: "FETCHED_PAINTINGS", paintings };
// }
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
// function fetchingPaintings() {
//   return dispatch => {
//     dispatch(loadingPainting());
//     fetch(URL)
//       .then(res => res.json())
//       .then(paintings => {
//         // debugger
//         console.log(paintings);
//         dispatch(fetchedPaintings(paintings));
//         //{type: "FETCHED_PAINTINGS", paintings}
//       });
//   };
// }
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
// export {
//   changeSearchText,
//   votingForPainting,
//   updatePainting,
//   fetchingPaintings
// };
