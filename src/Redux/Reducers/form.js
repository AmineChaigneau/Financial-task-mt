import { UPDATE_FORM, UPDATE_BULSHIT, UPDATE_RISK, UPDATE_TRIAL_FORM, UPDATE_FORM_FAIL, UPDATE_SCALE, UPDATE_TRIAL_FORMLIST } from '../Actions/types'

const initialState =  {
    subject_id: 0,
    bulshit_scale: [],
    trial_scale: [],
    question_scale: [],
    formulaire: [],
    risk_game: [],
    risk_scale: []
}

export default function formReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case UPDATE_BULSHIT:
            return {
                ...state,
                subject_id: payload.subject_id,
                bulshit_scale: payload.form,
            }
        case UPDATE_FORM:
            return {
                ...state,
                subject_id: payload.subject_id,
                formulaire: payload.form
            }
        case UPDATE_TRIAL_FORM:
            return {
                ...state,
                trial_scale: [...state.trial_scale, payload]
            }
        case UPDATE_RISK:
            return {
                ...state,
                subject_id: payload.subject_id,
                risk_game: [payload.form.essai1, payload.form.essai2],
                risk_scale: payload.slider
            }
        case UPDATE_SCALE:
            return {
                ...state,
                subject_id: payload.subject_id,
                question_scale: payload.form
            }
        case UPDATE_TRIAL_FORMLIST:
            return {
                ...state,
                trial_scale: [...state.trial_scale, ...payload]
            }
        case UPDATE_FORM_FAIL:
            return {
                ...state
            }
        default:
            return state
    };
};