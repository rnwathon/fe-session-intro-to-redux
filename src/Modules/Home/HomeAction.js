import * as types from './HomeActionTypes';
import axios from 'axios';

export function increaseNumber(num){
  return {
    type: types.INCREASE_NUMBER,
    num: num + 1
  }
}

export function decreaseNumber(num){
  return {
    type: types.DECREASE_NUMBER,
    num: num === 0 ? num : num - 1
  }
}

export function calculateNumber(num){
  let factorialResult = 0;

  function factorial(n){
    // TERMINATION
    if (n < 0) return;
    // BASE
    if (n === 0) return 1;
    // RECURSION
    return n * factorial(n - 1);
  }

  factorialResult = factorial(num)

  return {
    type: types.CALCULATE_NUMBER,
    factorialResult: factorialResult
  }
}

export function getActivity(univName){
  return dispatch => {
    dispatch({type: types.GET_ACTIVITY_REQUEST})

    axios({
      method: "GET",
      url: `http://universities.hipolabs.com/search?country=${univName}`
    })
    .then(result => {
     if(result.status === 200){
       dispatch({
         type: types.GET_ACTIVITY_SUCCESS,
         result: result.data
        })
     }
    })
    .catch(err => {
      console.log({
        type: types.GET_ACTIVITY_FAILURE,
        error: err
      })
    })
  }
}

