import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const PersonalDetails = props => {
    const { characterPrimaryInfo } = props;
    return (
        <Row className="article-section">
            <Col sm={8}>
                <div className="articleHeader">
                    <h5><u>Personal Details</u></h5>
                </div>
                <div className="articleContent">
                    <Row><span>Name : <b>{characterPrimaryInfo.name}</b></span></Row>
                    <Row><span>Status : <b>{characterPrimaryInfo.status}</b></span></Row>
                    <Row><span>Species : <b>{characterPrimaryInfo.species}</b></span></Row>
                    <Row><span>Gender : <b>{characterPrimaryInfo.gender}</b></span></Row>
                </div>
            </Col>
            <Col sm={4}>
                <Image src={characterPrimaryInfo.image} thumbnail />
            </Col>
        </Row>
    );
}

export default PersonalDetails;
