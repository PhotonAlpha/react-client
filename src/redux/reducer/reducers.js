import {combineReducers} from 'redux'

import counter from './counter'
import userInfo from './userInfo'
import commentContent from './comment'

export default combineReducers({
    counter,
    userInfo,
    commentContent
})
