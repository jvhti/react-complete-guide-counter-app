import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (result) => ({type: STORE_RESULT, result});

export const storeResult = (result) => {
  return (dispatch, getState) => {
    // Simulate a call to a server or something
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResult = (id) => ({type: DELETE_RESULT, id});
