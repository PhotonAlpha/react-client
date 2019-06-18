import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import combineReducers from '../reducer/reducers'

let store = createStore(combineReducers, applyMiddleware(thunkMiddleware))

export default store
