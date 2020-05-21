import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../store/actions/actions';
import CharacterList from '../Components/CharacterList/CharacterList';

const HomeSearch = props => {
    const { getCharactersList, getCharacterDetailsById } = props;
    useEffect(() => {
        getCharactersList();
    }, [getCharactersList]);

    return (
        <Container>
            <CharacterList characters={props.characters}
                getCharacterList={getCharactersList}
                info={props.info} getCharacterDetailsById={getCharacterDetailsById}
                characterDetails={props.characterDetails}/>
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
        characterDetails : state.characterDetails.data
    };
};

//these functions will be accessible via props in child components
const mapDispatchToProps = dispatch => {
    return {
        getCharactersList: (url, filter) =>
            dispatch(actions.getCharactersList(url, filter)),
        getCharacterDetailsById: (id) =>
            dispatch(actions.getCharacterDetailsById(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeSearch);
