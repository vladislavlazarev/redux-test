import axios from "axios";

function getDataCommentsSuccess(comment) {
  return {
    type: "GET_DATA_COMMENTS_SUCCESS",
    comment
  }
}
function getDataCommentsFailed(error) {
  return {
    type: "GET_DATA_COMMENTS_FAILED",
    error
  }
}
export function getDataPhotos() {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res)=> {
        dispatch(getDataCommentsSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDataCommentsFailed(error))
      });
  }

}