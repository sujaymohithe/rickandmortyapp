import React from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import LocationDetails from './LocationDetails/LocationDetails';
import EpisodeDetails from './EpisodesDetails/EpisodesDetails';
import RecommendedCharacters from './RecommendedCharacters/RecommendedCharacters';
import './CharacterDetails.css';

const CharacterDetails = props => {
    const { show, onHide, characterDetails,
         getCharacterDetailsById, getMoreRecommendations } = props;

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    {!characterDetails.loading && characterDetails.data &&
                        characterDetails.data.characterPrimaryInfo.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    !characterDetails.loading && characterDetails.data &&
                    <Row>
                        <Col sm={8} className="chac-col">

                            <PersonalDetails 
                                characterPrimaryInfo={characterDetails.data.characterPrimaryInfo} />

                            <LocationDetails 
                                characterLocationDetails={characterDetails.data.characterPrimaryInfo} />

                            <EpisodeDetails 
                                characterEpisodeDetails={characterDetails.data.characterEpisodesDetails} />

                        </Col>
                        <Col sm={4}>
                            <b><u>Recommendations based on same species</u></b><br/>
                            {
                                !characterDetails.recommendationListLoading &&
                                characterDetails.recommendationListData &&
                                <RecommendedCharacters
                                    otherCharacters={characterDetails.recommendationListData.results}
                                    info={characterDetails.recommendationListData.info}
                                    getCharacterDetailsById={getCharacterDetailsById} 
                                    getMoreRecommendations={getMoreRecommendations} />
                            }
                        </Col>
                    </Row>
                }
            </Modal.Body>
        </Modal >
    );
}

export default CharacterDetails;
