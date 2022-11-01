import { UPDATE_CURRENT_SUCCESS, UPDATE_CURRENT_FAIL, UPDATE_TRACKING_SUCCESS, UPDATE_TRACKING_FAIL, UPDATE_SCREEN, UPDATE_SCREEN_FAIL } from './types'

export const update_current = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_CURRENT_SUCCESS,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: UPDATE_CURRENT_FAIL
        })
    }
};

export const update_tracking = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_TRACKING_SUCCESS,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: UPDATE_TRACKING_FAIL
        })
    }
};

// export const UPDATE_TIME_START

export const update_screen = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_SCREEN,
            payload: res
        })
    } catch (err) {
        dispatch({
            type: UPDATE_SCREEN_FAIL
        })
    }
};