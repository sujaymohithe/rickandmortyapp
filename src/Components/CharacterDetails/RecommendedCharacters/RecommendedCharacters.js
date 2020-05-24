import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import './RecommendedCharacters.css';

const RecommendedCharacters = props => {
    const { otherCharacters, getCharacterDetailsById,
        getMoreRecommendations, info } = props;

    const clickhandler = (id) => {
        getCharacterDetailsById(id);
    }

    const linkClickhandler = (event) => {
        event.preventDefault()
        getMoreRecommendations(event.target.href);
    }

    return (
        <>
            <div>
                {info.prev &&
                    <a href={info.prev} className="c-anchor"
                        onClick={(event) => linkClickhandler(event)}>{'< '}Prev</a>}{' '}
                {info.next &&
                    <a href={info.next} className="c-anchor"
                        onClick={(event) => linkClickhandler(event)}>More{' >'}</a>}
            </div>
            <ul>
                {
                    otherCharacters.map((character, index) => {
                        return (
                            <li key={index}>
                                <Row>
                                    <Col sm={5}><Image className="img-char" src={character.image} roundedCircle /></Col>
                                    <Col sm={7} className="img-link">
                                        <button onClick={() => clickhandler(character.id)} className="ButtonLink">{character.name}</button>
                                    </Col>
                                </Row>
                                <hr />
                            </li>);
                    })
                }
            </ul>
        </>
    );
}

export default RecommendedCharacters;
