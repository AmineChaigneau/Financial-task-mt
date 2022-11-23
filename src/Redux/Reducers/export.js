import { LOAD_EXPORT_SUCCESS, LOAD_EXPORT_FAIL, UPDATE_EXPORT_SUCCESS, UPDATE_EXPORT_FAIL, PAGE } from '../Actions/types'

const initialState = {
    subject_id: Math.floor(Math.random() * 100000),
    trials: [],
    nb_trial: 0,
    nb_page: 0
}

export default function exportReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_EXPORT_SUCCESS:
            return {
                ...state
            }
        case LOAD_EXPORT_FAIL:
            return {
                ...state
            }
        case UPDATE_EXPORT_FAIL:
            return {
                ...state
            }
        case UPDATE_EXPORT_SUCCESS:
            return {
                ...state,
                trials: [...state.trials, payload],
                nb_trial: state.nb_trial + 1,
            }
        case PAGE:
            return {
                ...state,
                nb_page: state.nb_page + 1,
            }
        default:
            return state
    };
};