export function newReducer(state = {}, action) {
  switch (action.type) {
    case "GET_VALUE":
      return action.payload;
    break;
    default:
      return state;
  }
}