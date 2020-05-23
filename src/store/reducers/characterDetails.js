import {
    GET_CHARACTERDETAILS_SUCCESS,
    GET_CHARACTERDETAILS_START,
    GET_CHARACTERDETAILS_FAIL,
    GET_RECOMMENDATIONLIST_START,
    GET_RECOMMENDATIONLIST_SUCCESS,
    GET_RECOMMENDATIONLIST_FAIL
} from '../actions/actionTypes';

const initialState = {
    data: null,
    error: null,
    loading: false,
    recommendationListData: null,
    recommendationListError: null,
    recommendationListLoading: false,
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
        case GET_RECOMMENDATIONLIST_START:
            return Object.assign({}, state, {
                recommendationListError: null,
                recommendationListLoading: true
            });
        case GET_RECOMMENDATIONLIST_SUCCESS:
            return Object.assign({}, state, {
                recommendationListData: action.data,
                recommendationListError: null,
                recommendationListLoading: false
            });
        case GET_RECOMMENDATIONLIST_FAIL:
            return Object.assign({}, state, {
                recommendationListError: action.error,
                loading: false
            });
        default:
            return state;
    }
}