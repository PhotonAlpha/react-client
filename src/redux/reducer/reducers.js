import counter from './counter'

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action)
    }
}