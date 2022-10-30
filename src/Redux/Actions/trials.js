import { UPDATE_TRIALS_SUCCESS, UPDATE_TRIALS_FAIL } from './types'

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