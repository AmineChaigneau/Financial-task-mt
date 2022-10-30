import { UPDATE_CURRENT_SUCCESS, UPDATE_CURRENT_FAIL, UPDATE_TRACKING_SUCCESS, UPDATE_TRACKING_FAIL } from '../Actions/types'

const initialState = {
    id_trial: 0,
    stimuli: 0,
    time: 0,
    tracking: [],
    choice: '',
    output: true,
    invert: false,
    height_device: 0,
    width_device: 0
}

export default function currentReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_CURRENT_SUCCESS:
            return {
                ...state,
                id_trial: state.id_trial + 1,
                stimuli: payload
            }
        case UPDATE_CURRENT_FAIL:
            return {
                ...state
            }
        case UPDATE_TRACKING_SUCCESS:
            return {
                ...state,
                time: payload.time,
                tracking: payload.tracking,
                choice: payload.choice,
                output: payload.output,
                invert: payload.invert
            }
        case UPDATE_TRACKING_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}