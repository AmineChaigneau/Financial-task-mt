import { UPDATE_FORM, UPDATE_FORM_FAIL } from "./types";


export const update_form = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_FORM,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_FORM_FAIL
        });
    }
};