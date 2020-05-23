import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import CharacterList from '../Components/CharacterList/CharacterList';

const HomeSearch = props => {
    const { getCharactersList, getCharacterDetailsById, getOtherRecommendationList } = props;
    useEffect(() => {
        getCharactersList();
    }, [getCharactersList]);

    return (
        <Container>
            <CharacterList characters={props.characters}
                getCharacterList={getCharactersList}
                info={props.info} getCharacterDetailsById={getCharacterDetailsById}
                characterDetails={props.characterDetails}
                otherRecommendationsDetails={props.otherRecommendationsDetails}
                getOtherRecommendationList={getOtherRecommendationList} />
        </Container>
    );
}

//method that copies part of the state to the props of this component.
const mapStateToProps = state => {
    debugger;
    return {
        loading: state.charactersList.loading,
        error: state.charactersList.error,
        characters: state.charactersList.data && state.charactersList.data.results,
        info: state.charactersList.data && state.charactersList.data.info,
        characterDetailsLoading: state.characterDetails.loading,
        characterDetailsError: state.characterDetails.error,
        characterDetails: state.characterDetails.data,
        otherRecommendationsLoading: state.characterDetails.recommendationListLoading,
        otherRecommendationsError: state.characterDetails.recommendationListError,
        otherRecommendationsDetails: state.characterDetails.recommendationListData
    };
};

//these functions will be accessible via props in child components
const mapDispatchToProps = dispatch => {
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
