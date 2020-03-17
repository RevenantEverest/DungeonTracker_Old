import React, { Component } from 'react';
import './CampaignSettings.css';

import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBBtn
} from 'mdbreact';


import InviteUser from '../../sections/InviteUser/InviteUser';

class CampaignSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="CampaignSettings" className="app-page">
                <Container fluid>
                <Row style={{ marginBottom: "2%" }}>
                    <Col>
                    <MDBBreadcrumb style={{ background: "#1c1c1c" }}>
                        <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem><Link to="/campaign">Campaign</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Settings</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    </Col>
                </Row>
                <Row style={{ marginBottom: "2%" }}>
                    <Col>
                    <InviteUser userData={this.props.userData} manageCampaign={this.props.manageCampaign} />
                    </Col>
                </Row>
                <Row style={{ marginBottom: "2%" }}>
                    <Col>
                    <MDBCard style={{ background: "#1c1c1c" }}>
                    <MDBCardBody>
                        <MDBCardTitle className="font-weight-bold">Invite Link</MDBCardTitle>
                        <Row>
                            <Col md={4}>
                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text CampaignSettings_InputIcon" id="basic-addon">
                                <i className="fa fa-link prefix"></i>
                                </span>
                            </div>
                            <input 
                            type="text" 
                            className="form-control CampaignSettings_Input" 
                            placeholder="Enter A Username" 
                            aria-label="Username" 
                            aria-describedby="basic-addon"
                            />
                            </div>
                            </Col>
                            <Col md={4}>
                                <MDBBtn color="unique" className="mt-0" size="md">Copy</MDBBtn>
                            </Col>
                            <Col md={4}>
                                <MDBBtn color="unique" className="mt-0" size="md">Generate New Link</MDBBtn>
                            </Col>
                        </Row>
                    </MDBCardBody>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default CampaignSettings;