import React from 'react'
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux'

// Reducers
import HomeReducer from '../Modules/Home/HomeReducer';

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
)

const rootReducer = combineReducers({
  Home: HomeReducer
})

const reduxStore = createStore(
  rootReducer,
  enhancer
)

const ReduxProvider = (props) => {
  return(
    <Provider store={reduxStore}>
      {props.children}
    </Provider>
  )
}

export default ReduxProvider