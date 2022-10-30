import { LOAD_EXPORT_SUCCESS, LOAD_EXPORT_FAIL, UPDATE_EXPORT_SUCCESS, UPDATE_EXPORT_FAIL } from '../Actions/types'

const initialState = {
    subject_id: Math.floor(Math.random() * 100000),
    trials: [],
    nb_trial: 0
}

export default function exportReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_EXPORT_SUCCESS:
            return {
                ...state
            }
        case UPDATE_EXPORT_SUCCESS:
            return {
                ...state,
                trials: [...state.trials, payload],
                nb_trial: state.nb_trial + 1,
            }
        default:
            return state
    };
};