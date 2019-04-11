export function getComments(state = {}, action) {
  switch (action.type) {
    case "GET_DATA_COMMENTS_SUCCESS":
      return action.comment;
      break;
    case "GET_DATA_COMMENTS_ERROR":
      return action.error;
      break;
    default:
      return state;
  }
}