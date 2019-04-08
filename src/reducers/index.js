import { combineReducers } from 'redux';
import { test } from "./testReducer";

const combineStore = combineReducers({
  test
});

export default combineStore;