import { UPDATE_LANGUE, UPDATE_LANGUE_FAIL } from '../Actions/types'
import { fr, en } from '../../Component/ressources/text'

const initialState = {
    langue: 'fr',
    text: en
}

export default function textReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case UPDATE_LANGUE:
            return {
                ...state,
                langue: payload.langue,
                text: payload.text
            }
    case UPDATE_LANGUE_FAIL:
            return {
                ...state
            }
        default:
            return state
    }
}