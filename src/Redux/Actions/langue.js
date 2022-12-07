import { UPDATE_LANGUE, UPDATE_LANGUE_FAIL, SET_INVERT, SET_INVERT_FAIL } from "./types";


export const choose_langue = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_LANGUE,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_LANGUE_FAIL
        });
    }
};

export const set_invert = (res) => async dispatch => {
    try {
        dispatch({
            type: SET_INVERT,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: SET_INVERT_FAIL
        });
    }
};
