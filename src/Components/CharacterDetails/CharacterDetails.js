import React from 'react';
import { Container, Row, Col, Image, Modal } from 'react-bootstrap';
import PersonalDetails from './PersonalDetails/PersonalDetails';

const CharacterDetails = (props) => {
    const { show, onHide, characterDetails } = props;
    return (

        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>
                    {characterDetails.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <Col sm={8}>
                                <PersonalDetails />
                            </Col>
                            <Col sm={4}>
                                <Image src={characterDetails.image} thumbnail />
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4}>sm=4</Col>
                </Row>
            </Modal.Body>
        </Modal >
    );

}

export default CharacterDetails;
