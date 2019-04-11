import axios from "axios";

function getDataPhotosSuccess(photos) {
  return {
    type: "GET_DATA_PHOTOS_SUCCESS",
    photos
  }
}
function getDataPhotosFailed(error) {
  return {
    type: "GET_DATA_PHOTOS_FAILED",
    error
  }
}
export function getDataPhotos() {
  return (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res)=> {
        dispatch(getDataPhotosSuccess(res.data))
      })
      .catch((error) => {
        dispatch(getDataPhotosFailed(error))
      });
  }

}