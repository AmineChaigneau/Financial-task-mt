import { UPDATE_CALIBRATION_SUCCESS, UPDATE_CALIBRATION_FAIL } from "./types";


export const update_calibration = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_CALIBRATION_SUCCESS,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_CALIBRATION_FAIL
        });
    }
};