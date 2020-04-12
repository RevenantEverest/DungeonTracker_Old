import React, { Component } from 'react';
import '../css/CharacterProfile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBAvatar,
} from 'mdbreact';

class CharacterProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: this.props.location.state.userData,
            manageServer: this.props.location.state.manageServer,
            characterData: this.props.location.state.characterData,
        };
    };

    render() {
        const character = this.state.characterData;
        return(
            <div className="CharacterProfile">
                <Container>
                <Row>
                    <Col>
                        <MDBCard style={{ background: "#1c1c1c" }}>
                        <MDBCardBody>
                            <Container>
                            <Row>
                                <Col md={3} lg={3} className="float-left">
                                    <div className="CharacterProfile-Container">
                                    <MDBAvatar
                                        src={character.avatar}
                                        className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid CharacterProfile-Avatar"
                                        tag="img"
                                        alt="Sample avatar"
                                    />
                                    </div>
                                </Col>
                                <Col>
                                    <Row>
                                        <h3 className="h3 display-inline">{character.name}</h3>
                                        <FontAwesomeIcon 
                                        className="display-inline font-weight-bold" 
                                        icon={character.gender === "male" ? "mars" : "venus"} 
                                        style={{
                                            marginLeft: "1%",
                                            fontSize: "2rem",
                                            color: character.gender === "male" ? "cyan" : "pink"
                                        }}
                                        />
                                    </Row>
                                    <Row>
                                        <h6 className="font-weight-bold grey-text mb-3">
                                            {character.race} {character.profession}
                                        </h6>
                                    </Row>
                                    <Row>
                                        <p className="grey-text">
                                            {character.description}
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                            <br />
                            <Row className="justify-content-md-center">
                                <Col lg={3}>
                                    <div className="form-group">
                                        <label>Place of Origin</label>
                                        <input 
                                        type="text" 
                                        className="form-control form-control-md"
                                        placeholder={character.race}
                                        style={{ background: "transparent", color: "white" }}
                                        />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div className="form-group">
                                        <label>Last Known Location</label>
                                        <input 
                                        type="text" 
                                        className="form-control form-control-md"
                                        placeholder={character.race}
                                        style={{ background: "transparent", color: "white" }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            </Container>
                        </MDBCardBody>
                        </MDBCard>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default CharacterProfile;