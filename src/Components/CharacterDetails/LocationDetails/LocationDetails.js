import React from 'react';
import { Row, Col } from 'react-bootstrap';

const LocationDetails = props => {
    const { characterLocationDetails } = props;
    return (
        <Row className="article-section">
            <Col sm={12}>
                <div className="articleHeader">
                    <h5><u>Location Details</u></h5>
                </div>
                <div className="articleContent">
                    <Row>
                        <span>
                            Origin : <b>{characterLocationDetails.origin.name}</b>
                        </span>
                    </Row>
                    <Row>
                        <span>
                            Location : <b>{characterLocationDetails.location.name}</b>
                        </span>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default LocationDetails;
