import {
    GET_CHARACTERSLIST_SUCCESS,
    GET_CHARACTERSLIST_START,
    GET_CHARACTERSLIST_FAIL
} from '../actions/actionTypes';

const initialState = {
    data: null,
    error: null,
    loading: false,
};

export function charactersList(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERSLIST_START:
            return Object.assign({}, state, {
                error: null,
                loading: true
            });
        case GET_CHARACTERSLIST_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                error: null,
                loading: false
            });
        case GET_CHARACTERSLIST_FAIL:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            });
        default:
            return state;
    }
}