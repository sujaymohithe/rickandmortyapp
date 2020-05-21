import {
    GET_CHARACTERDETAILS_SUCCESS,
    GET_CHARACTERDETAILS_START,
    GET_CHARACTERDETAILS_FAIL
} from '../actions/actionTypes';

const initialState = {
    data: null,
    error: null,
    loading: false,
};

export function characterDetails(state = initialState, action) {
    switch (action.type) {
        case GET_CHARACTERDETAILS_START:
            return Object.assign({}, state, {
                error: null,
                loading: true
            });
        case GET_CHARACTERDETAILS_SUCCESS:
            return Object.assign({}, state, {
                data: action.data,
                error: null,
                loading: false
            });
        case GET_CHARACTERDETAILS_FAIL:
            return Object.assign({}, state, {
                error: action.error,
                loading: false
            });
        default:
            return state;
    }
}