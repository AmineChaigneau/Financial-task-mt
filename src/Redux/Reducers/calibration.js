import { UPDATE_CALIBRATION_SUCCESS, UPDATE_CALIBRATION_FAIL } from '../Actions/types'

const initialState = {
    subject_id: 0,
    calibration: []
}

export default function exportReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_CALIBRATION_FAIL:
            return {
                ...state
            }
        case UPDATE_CALIBRATION_SUCCESS:
            return {
                ...state,
                subject_id: payload.subject_id,
                calibration: [...state.calibration, payload.tracking]
            }
        default:
            return state
    };
};