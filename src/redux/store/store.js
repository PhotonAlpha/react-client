import { createStore, applyMiddleware } from 'redux'
import combineReducers from '../reducer/reducers'
import promiseMiddleware from '../middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware))

export default store
