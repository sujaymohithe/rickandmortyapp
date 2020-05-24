import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import CharacterList from '../Components/CharacterList/CharacterList';
import './HomeSearch.css';

const HomeSearch = props => {
    const {
        characters,
        characterDetails,
        getCharactersList,
        getCharacterDetailsById,
        getOtherRecommendationList } = props;

    useEffect(() => {
        getCharactersList();
    }, [getCharactersList]);

    return (
        <Container className="">
            <CharacterList
                characters={characters}
                characterDetails={characterDetails}
                getCharacterList={getCharactersList}
                getCharacterDetailsById={getCharacterDetailsById}
                getOtherRecommendationList={getOtherRecommendationList}
            />
        </Container>
    );
}

//method that copies part of the state to the props of this component.
export const mapStateToProps = state => {
    return {
        characters: state.charactersList,
        characterDetails: state.characterDetails,
    };
};

//these functions will be accessible via props in child components
export const mapDispatchToProps = dispatch => {
    return {
        getCharactersList: (url, filterType, filterValue) =>
            dispatch(actions.getCharactersList(url, filterType, filterValue)),
        getCharacterDetailsById: (id) =>
            dispatch(actions.getCharacterDetailsById(id)),
        getOtherRecommendationList: (url, filterType, filterValue) =>
            dispatch(actions.getOtherRecommendationList(url, filterType, filterValue)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeSearch);
