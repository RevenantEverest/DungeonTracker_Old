import React, { Component } from 'react';
import './Account.css';

import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardUp,
    MDBCardBody,
    MDBAvatar
} from 'mdbreact';

import env from '../../../env';

class Account extends Component {

    render() {
        const userData = this.props.userData;
        return(
            <div id="Account" className="app-page">
                <Container fluid>
                <Row>
                    <Col>
                    <MDBCard testimonial style={{ background: "#1c1c1c" }}>
                    <MDBCardUp className='ripe-malinka-gradient' />
                    <MDBAvatar className='mx-auto' style={{ borderColor: "#353535" }}>
                        <div style={{ background: "#252525" }}>
                        <img
                        src={userData.avatar !== "" ? `${env.API}/${userData.avatar}` : "https://i.imgur.com/c26Syzn.jpg"}
                        alt=''
                        />
                        </div>
                    </MDBAvatar>
                    <MDBCardBody>
                        <h4 className='card-title'>{userData.username}</h4>
                        <hr />
                        <p>
                        Account Created: {moment(userData.date_created).format("MMM Do YYYY")}
                        </p>
                    </MDBCardBody>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default Account;