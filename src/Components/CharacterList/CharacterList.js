import React, { useState } from 'react';
import './CharacterList.css';
import { Table, Form, Button } from 'react-bootstrap';
import Pagination from './Pagination/Pagination';
import CharacterDetails from '../CharacterDetails/CharacterDetails';
import { NO_RESULTS } from '../../AppConstants';

const CharacterList = props => {
    let [show, setShow] = useState(false);
    let [name, setName] = useState('');
    const { characters, characterDetails, getCharacterDetailsById,
        getOtherRecommendationList, getCharacterList } = props;

    //function to populate and display the characters list in a table
    const populateCharactersList = (character, index) => {
        return (
            <tr key={index}>
                <td>
                    <button className="ButtonLink"
                        onClick={() => showCharacterDetails(character)}>Click Here
                    </button>
                </td>
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
            </tr>
        );
    }

    /* function to get character details and other recommendations when clicked on
    individual character */
    const showCharacterDetails = (character) => {
        //details view modal opens up
        setShow(true);
        getCharacterDetailsById(character.id);
        getOtherRecommendationList('', 'species', character.species);
    }

    //to hide pop-up
    const hideCharacterDetails = () => {
        setShow(false);
    }

    //function for getting character list by searching using name
    const onSubmit = (event) => {
        const inputTxt = document.getElementById('inCharacter').value;
        getCharacterList('', 'name', inputTxt.trim());
        event.preventDefault();
    }

    return (
        <div>
            <br /><h2 data-testid='header'>List of characters</h2>
            <Form sm={12} onSubmit={onSubmit}>
                <input type="text"
                    className="form-input Inline"
                    id="inCharacter"
                    autoComplete="off"
                    placeholder="Type the name of a character"
                    value={name}
                    onChange={event => setName(event.target.value)} />
                <Button type="submit"
                    className="search-button btn-info">Search</Button>
            </Form>
            {
                characters.data &&
                <>
                    <Pagination info={characters.data.info} getCharacterList={getCharacterList} />

                    <br />
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>More Details</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Species</th>
                            </tr>
                        </thead>
                        <tbody>
                            {characters.data.results.map((eachRow, index) => populateCharactersList(eachRow, index))}
                        </tbody>
                    </Table>
                </>
            }
            {
                !characters.data && <h3 className="center">{NO_RESULTS}</h3>
            }

            {characterDetails &&
                <CharacterDetails show={show} onHide={hideCharacterDetails}
                    characterDetails={characterDetails}
                    getCharacterDetailsById={getCharacterDetailsById}
                    getMoreRecommendations={getOtherRecommendationList}
                />
            }
        </div>
    );
}

export default CharacterList;
