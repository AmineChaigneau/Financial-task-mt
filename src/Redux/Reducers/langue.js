import { UPDATE_LANGUE, UPDATE_LANGUE_FAIL, SET_INVERT, SET_INVERT_FAIL } from '../Actions/types'
import { fr } from '../../Component/ressources/text'

const initialState = {
    langue: 'fr',
    text: fr,
    invert: false,
    time: 20
}

export default function textReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case UPDATE_LANGUE:
            return {
                ...state,
                langue: payload.langue,
                text: payload.text,
                time: payload.time
            }
    case UPDATE_LANGUE_FAIL:
            return {
                ...state
            }
    case SET_INVERT:
            return {
                ...state,
                invert: payload
            }
    case SET_INVERT_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}