import { UPDATE_FORM, UPDATE_FORM_FAIL } from '../Actions/types'

const initialState =  {
    subject_id: Math.floor(Math.random() * 100000),
    form: [],
    time: 0
}

export default function formReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case UPDATE_FORM:
            return {
                ...state,
                subject_id: payload.subject_id,
                form: payload.form,
                time: payload.time
            }
        case UPDATE_FORM_FAIL:
            return {
                ...state
            }
        default:
            return state
    };
};