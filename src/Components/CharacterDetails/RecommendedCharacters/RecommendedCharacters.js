import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import './RecommendedCharacters.css';

const RecommendedCharacters = props => {
    const { otherCharacters, getCharacterDetailsById } = props;

    const clickhandler = (id) => {
        getCharacterDetailsById(id);
    }
    return (
        <ul>
            {
                otherCharacters.map((character, index) => {
                    return (
                        <li key={index}>
                            <Row>
                                <Col><Image className="img-char" src={character.image} roundedCircle /></Col>
                                <Col className="img-link">
                                    <button  onClick={() => clickhandler(character.id)} className="ButtonLink">{character.name}</button>
                                </Col>
                            </Row>
                            <hr />
                        </li>);
                })
            }
        </ul>
    );
}

export default RecommendedCharacters;
