import {createStore} from 'redux'
import combineReducers from '../reducer/reducers'

let store = createStore(combineReducers)

export default store
