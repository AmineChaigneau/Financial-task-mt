import { UPDATE_TRIALS_SUCCESS, UPDATE_TRIALS_FAIL } from '../Actions/types'
import { trials } from '../../Component/ressources/stimuli_list'

const initialState = {
    time_all: 0,
    trial: trials
}

export default function trialsReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case UPDATE_TRIALS_SUCCESS:
            return {
                ...state,
                trial: [...state.trial.slice(0, payload), ...state.trial.slice(payload + 1)]
            }
        case UPDATE_TRIALS_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}