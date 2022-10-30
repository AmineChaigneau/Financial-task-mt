import { combineReducers } from 'redux'
import trialsReducer from './trials'
import exportReducer from './export'
import currentReducer from './current'
import calibrationReducer from './calibration'
import { RESET_STORE } from '../Actions/types'

const appReducer = combineReducers({
    trialsReducer,
    exportReducer,
    currentReducer,
    calibrationReducer
})

const rootReducer = (state, action) => {
    if (action.type === RESET_STORE) {
        state = undefined;
    }
    return appReducer(state, action)
}

export default rootReducer;