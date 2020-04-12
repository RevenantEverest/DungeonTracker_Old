import React, { Component } from 'react';
import '../css/Campaign.css';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCard,
    MDBCardUp,
    MDBAvatar,
    MDBCardBody,
    MDBIcon
} from 'mdbreact';

import env from '../../env';

class CampaignOverview extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    renderSpinner() {
        if(!this.state.dataReceived && this.props.manageCampaign)
            return <Row><Col><Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner></Col></Row>;
        else if(!this.state.manageServer)
            return(
                <Row>
                    <Col lg={1} style={{ paddingRight: 0 }}>
                        <Spinner animation="border" role="status" style={{ display: "inline-block" }}><span className="sr-only">Loading...</span></Spinner>
                    </Col>
                    <Col style={{ paddingLeft: 0 }}>
                        <h5 className="h5" style={{ display: "inline-block", marginLeft: "2%" }}>Please Select A Campaign Before Continuing</h5>
                    </Col>
                </Row>
            );
    }

    renderOverview() {
        const manageCampaign = this.props.manageCampaign;
        return(
            <Container fluid>
            <Row>
                <Col>
                    <MDBCard testimonial style={{ background: "#1c1c1c" }}>
                    <MDBCardUp className='ripe-malinka-gradient' />
                    <MDBAvatar className='mx-auto' style={{ borderColor: "#353535" }}>
                        <div style={{ background: "#252525" }}>
                        <img
                        src={manageCampaign.avatar !== "" ? `${env.API}/${manageCampaign.avatar}` : "https://i.imgur.com/c26Syzn.jpg"}
                        alt=''
                        />
                        </div>
                    </MDBAvatar>
                    <MDBCardBody>
                        <h4 className='card-title'>{manageCampaign.name}</h4>
                        <p className="font-bold display-inline">Edition: </p>
                        <p className="display-inline">{manageCampaign.edition}</p>
                        <hr />
                        <p>
                        {manageCampaign.description}
                        </p>
                    </MDBCardBody>
                    </MDBCard>
                </Col>
                <Col>
                    <MDBCard>
                    <MDBCardBody style={{ background: "#1c1c1c" }}>
                        <Row style={{ marginTop: "2%", marginBottom: "5%" }}>
                            <Col>
                            <FontAwesomeIcon className="CampaignOverview_Icon display-inline mr-2" icon="users" />
                            <h5 className="h5 font-weight-bold display-inline">Characters:</h5>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: "5%" }}>
                            <Col>
                            <FontAwesomeIcon className="CampaignOverview_Icon display-inline mr-2" icon="map" />
                            <h5 className="h5 font-weight-bold display-inline">Places:</h5>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: "5%" }}>
                            <Col>
                            <FontAwesomeIcon className="CampaignOverview_Icon display-inline mr-2" icon="address-card" />
                            <h5 className="h5 font-weight-bold display-inline">Organizations:</h5>
                            </Col>
                        </Row>
                        <Row style={{ marginBottom: "5%" }}>
                            <Col>
                            <FontAwesomeIcon className="CampaignOverview_Icon display-inline mr-2" icon="address-book" />
                            <h5 className="h5 font-weight-bold display-inline">Players:</h5>
                            </Col>
                        </Row>
                    </MDBCardBody>
                    </MDBCard>
                </Col>
            </Row>
            </Container>
        );
    }

    render() {
        const manageCampaign = this.props.manageCampaign;
        return(
            <div id="CampaignOverview" className="app-page">
                <Container fluid>
                <Row style={{ marginBottom: "2%" }}>
                    <Col>
                    <MDBBreadcrumb style={{ background: "#1c1c1c" }}>
                        <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Campaign</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    </Col>
                </Row>
                {manageCampaign ? this.renderOverview() : this.renderSpinner()}
                </Container>
            </div>
        );
    }
};

export default CampaignOverview;