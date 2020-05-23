import React from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import LocationDetails from './LocationDetails/LocationDetails';
import './CharacterDetails.css';
import EpisodeDetails from './EpisodesDetails/EpisodesDetails';

const CharacterDetails = (props) => {
    debugger;
    const { show, onHide, characterDetails, otherRecommendationsDetails } = props;
    return (

        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    {characterDetails.characterPrimaryInfo.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={8} className="chac-col">

                        <PersonalDetails
                            characterPrimaryInfo={characterDetails.characterPrimaryInfo} />

                        <LocationDetails
                            characterLocationDetails={characterDetails.characterPrimaryInfo} />

                        <EpisodeDetails
                            characterEpisodeDetails={characterDetails.characterEpisodesDetails} />

                    </Col>
                    <Col sm={4}>
                        <b><u>Other recomendations based on same species</u></b>
                        <ul>
                            {
                                otherRecommendationsDetails && otherRecommendationsDetails.results &&
                                otherRecommendationsDetails.results.map((character, index) => {
                                    return (<li key={index}>{character.name}</li>);
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal >
    );

}

export default CharacterDetails;
