export function test(state = {}, action) {
  switch (action.type) {
    case "GET_DATA":
      return action.payload;
    break;
    case "GET_VALUE":
      return action.payload;
    break;
    default:
      return state;
  }
}