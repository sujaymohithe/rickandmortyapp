import React, { useState } from 'react';
import './CharacterList.css';
import { Table, Form, Button } from 'react-bootstrap';
import Pagination from './Pagination/Pagination';
import CharacterDetails from '../CharacterDetails/CharacterDetails';

const CharacterList = (props) => {
    let [show, setShow] = useState(false);
    //function to populate and display the characters dropdown options
    const populateCharactersList = (character, index) => {
        return (
            <tr key={index}>
                <td><button onClick={() => showCharacterDetails(character)}>Click Here</button></td>
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
            </tr>
        );
    }

    const showCharacterDetails = (character) => {
        debugger;
        setShow(true);
        props.getCharacterDetailsById(character.id);
    }

    //to hide pop-up
    const hideCharacterDetails = () => {
        setShow(false);
    }

    const searchButtonHandler = () => {
        debugger;
        props.getCharacterList('', document.getElementById('inCharacter').value);
    }

    return (
        <div>
            <br /><h2>List of characters </h2>
            <Form>
                <input type="text"
                    className="form-input Inline"
                    id="inCharacter" placeholder="Type the name of a character" />
                <Button type="button" onClick={searchButtonHandler}
                    className="search-button btn-info">Search</Button>
            </Form>
            {
                props.info &&
                <Pagination info={props.info} getCharacterList={props.getCharacterList} />
            }
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
                    {props.characters &&
                        props.characters.map((eachRow, index) => populateCharactersList(eachRow, index))}
                </tbody>
            </Table>

            {props.characterDetails &&
                <CharacterDetails show={show} onHide={hideCharacterDetails}
                    characterDetails={props.characterDetails} />
            }
        </div>
    );

}

export default CharacterList;
