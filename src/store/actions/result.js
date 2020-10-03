import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (result) => ({type: STORE_RESULT, result});

export const storeResult = (result) => {
  return (dispatch) => {
    // Simulate a call to a server or something
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => ({type: DELETE_RESULT, id});
