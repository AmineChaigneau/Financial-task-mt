import { UPDATE_EXPORT_SUCCESS, UPDATE_EXPORT_FAIL , PAGE } from "./types";


export const update_res = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_EXPORT_SUCCESS,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_EXPORT_FAIL
        });
    }
};

export const page = () => async dispatch => {
    dispatch({
        type: PAGE,
    });
}