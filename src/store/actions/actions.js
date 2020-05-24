import * as actionTypes from './actionTypes';
import charactersAPI from '../api/charactersAPI';

//get characters list start dispatch method
export const getCharactersListStart = () => {
    return {
        type: actionTypes.GET_CHARACTERSLIST_START
    };
};

//get characters list success dispatch method
export const getCharactersListSuccess = (list) => {
    return {
        type: actionTypes.GET_CHARACTERSLIST_SUCCESS,
        data: list
    };
};

//get characters list failure dispatch method
export const getCharactersListFailure = (error) => {
    return {
        type: actionTypes.GET_CHARACTERSLIST_FAIL,
        error: error
    };
};

//currying the dispatch method of the store to get all characters list
export function getCharactersList(url, filterType, filterValue) {
    return function (dispatch) {
        dispatch(getCharactersListStart());
        return charactersAPI.fetchCharactersList(url, filterType, filterValue).then(data => {
            dispatch(getCharactersListSuccess(data));
        }).catch(error => {
            dispatch(getCharactersListFailure(error));
        });
    };
}

//get same species other character recommendation list start dispatch method
export const getRecommendationListStart = () => {
    return {
        type: actionTypes.GET_RECOMMENDATIONLIST_START
    };
};

//get same species other character recommendation list start dispatch method
export const getRecommendationListSuccess = (list) => {
    return {
        type: actionTypes.GET_RECOMMENDATIONLIST_SUCCESS,
        data: list
    };
};

//get characters list failure dispatch method
export const getRecommendationListFailure = (error) => {
    return {
        type: actionTypes.GET_RECOMMENDATIONLIST_FAIL,
        error: error
    };
};

//currying the dispatch method of the store to get all other recommendations list
export function getOtherRecommendationList(url, filterType, filterValue) {
    return function (dispatch) {
        dispatch(getRecommendationListStart());
        return charactersAPI.fetchCharactersList(url, filterType, filterValue).then(data => {
            dispatch(getRecommendationListSuccess(data));
        }).catch(error => {
            dispatch(getRecommendationListFailure(error));
        });
    };
}

//get characters list start dispatch method
export const getCharacterDetailsStart = () => {
    return {
        type: actionTypes.GET_CHARACTERDETAILS_START
    };
};

//get characters list success dispatch method
export const getCharacterDetailsSuccess = (list) => {
    return {
        type: actionTypes.GET_CHARACTERDETAILS_SUCCESS,
        data: list
    };
};

//get characters list failure dispatch method
export const getCharacterDetailsFailure = (error) => {
    return {
        type: actionTypes.GET_CHARACTERDETAILS_FAIL,
        error: error
    };
};

//currying the dispatch method of the store to get character details by id
export function getCharacterDetailsById(id) {
    return function (dispatch) {
        dispatch(getCharacterDetailsStart());
        return charactersAPI.fetchCharacterDetailsById(id).then(data => {
            dispatch(getCharacterDetailsSuccess(data));
        }).catch(error => {
            dispatch(getCharacterDetailsFailure(error));
        });
    };
}


