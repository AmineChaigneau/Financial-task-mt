import { UPDATE_FORM, UPDATE_BULSHIT, UPDATE_TRIAL_FORM, UPDATE_RISK, UPDATE_SCALE, UPDATE_FORM_FAIL, UPDATE_TRIAL_FORMLIST } from "./types";


export const update_form = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_BULSHIT,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_FORM_FAIL
        });
    }
};

export const update_formulaire = (res) => async dispatch => {
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

export const update_form_trial = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_TRIAL_FORM,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_FORM_FAIL
        });
    }
};

export const update_form_trial_list = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_TRIAL_FORMLIST,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_FORM_FAIL
        });
    }
};

export const update_risk_scale = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_RISK,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_FORM_FAIL
        });
    }
};

export const update_question_scale = (res) => async dispatch => {
    try {
        dispatch({
            type: UPDATE_SCALE,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: UPDATE_FORM_FAIL
        });
    }
};