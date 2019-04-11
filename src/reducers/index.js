import { combineReducers } from 'redux';
import { newReducer } from "./newReducer";
import { test } from "./testReducer";
import { getPhotos} from "./getPhotosReducer";

const combineStore = combineReducers({
  test,
  newReducer,
  getPhotos
});

export default combineStore;
