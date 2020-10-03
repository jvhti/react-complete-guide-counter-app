import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {...state, results: state.results.concat({id: new Date().getTime(), value: action.result})};
    case actionTypes.DELETE_RESULT:
      const updatedArray = state.results.filter((res) => res.id !== action.id);

      return {...state, results: updatedArray};
    default:
      return state;
  }

};

export default reducer;