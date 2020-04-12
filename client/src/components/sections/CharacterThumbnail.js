import React, { Component } from 'react';
import '../css/CharacterThumbnail.css';

import { Link } from 'react-router-dom';
import {
    MDBCard,
    MDBCardBody,
    MDBRow, 
    MDBCol,
    MDBAvatar,
    MDBBtn
} from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CharacterThumbnail extends Component {

    render() {
        const character = this.props.characterData;
        return(
            <div className="CharacterThumbnail">
            <MDBCard style={{ background: "#1c1c1c" }}>
            <MDBCardBody>
            <MDBRow>
                <MDBCol className="mb-5">
                    <MDBCol md="4" lg="6" className="float-left">
                        <div className="CharacterThumbnail-Container">
                        <MDBAvatar
                            src={character.avatar}
                            className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid CharacterThumbnail-Avatar"
                            tag="img"
                            alt="Sample avatar"
                        />
                        </div>
                    </MDBCol>
                    <MDBCol md="8" lg="6" className="float-right">
                    <h4 className="font-weight-bold display-inline mb-3">{character.name}</h4>
                    <FontAwesomeIcon 
                    className="FontAwesomeIcon-Reverse font-weight-bold" 
                    icon={character.gender === "male" ? "mars" : "venus"} 
                    style={{
                        fontSize: "1.5rem",
                        color: character.gender === "male" ? "cyan" : "pink"
                    }}
                    />
                    <h6 className="font-weight-bold grey-text mb-3">
                        {character.race} {character.profession}
                    </h6>
                    <p className="grey-text">
                        {character.description}
                    </p>
                    </MDBCol>
                    <MDBCol md="8" lg="6" className="float-right">
                        <Link to={{
                            pathname: `/characters/${character.type.toLowerCase()}/${character.name.split(" ").join("")}`,
                            state: {
                                userData: this.props.userData,
                                manageCampaign: this.props.manageServer,
                                characterData: character
                            }
                        }}>
                        <MDBBtn color="unique" size="sm" style={{ marginLeft: "0" }}>View Profile</MDBBtn>
                        </Link>
                    </MDBCol>
                </MDBCol>
                </MDBRow>
            </MDBCardBody>
            </MDBCard>
            </div>
        );
    }
};

export default CharacterThumbnail