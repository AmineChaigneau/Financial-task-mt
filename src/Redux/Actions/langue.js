import { UPDATE_LANGUE, UPDATE_LANGUE_FAIL} from "./types";


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