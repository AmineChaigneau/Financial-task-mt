import { UPDATE_TRIALS_SUCCESS, UPDATE_TRIALS_FAIL, UPDATE_TRIAL_FIRST, UPDATE_TRIAL_FIRST_FAIL } from './types'

export const update_trials = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_TRIALS_SUCCESS,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: UPDATE_TRIALS_FAIL
        })
    }
};

export const load_trial_list = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_TRIAL_FIRST,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: UPDATE_TRIAL_FIRST_FAIL
        })
    }
};