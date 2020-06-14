import * as types from "./HomeActionTypes";

const initState = {
  num: 0,
  factorialResult: 0,
  result: null,
  loading: false,
  error: null
}

function HomeReducer(state = initState, action){
  switch(action.type){
    case types.INCREASE_NUMBER:
    case types.DECREASE_NUMBER:
      return {
        ...state,
        num: action.num
      }
    case types.CALCULATE_NUMBER:
      return {
        ...state,
        factorialResult: action.factorialResult
      }
    case types.GET_ACTIVITY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.GET_ACTIVITY_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.result
      }
    case types.GET_ACTIVITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return {...state}
  }
}

export default HomeReducer;