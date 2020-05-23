import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';

const EpisodeDetails = (props) => {
    const { characterEpisodeDetails } = props;

    //function to populate and display the episode details
    const populateEpisodeList = (episode, index) => {
        return (
            <tr key={index}>
                <td>{episode.name}</td>
                <td>{episode.air_date}</td>
                <td>{episode.episode}</td>
            </tr>
        );
    }

    return (
        <Row className="article-section">
            <Col sm={12}>
                <div className="articleHeader">
                    <h5><u>Episode Details</u></h5>
                </div>
                <div className="articleContent">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Air Date</th>
                                <th>Episode Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {characterEpisodeDetails &&
                                characterEpisodeDetails.map((episode, index) => populateEpisodeList(episode, index))}
                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>
    );
}

export default EpisodeDetails;
