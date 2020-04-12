import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem
} from 'mdbreact';

class Dashboard extends Component {

    render() {
        return(
            <div id="Dashboard" className="app-page">
                <Container fluid>
                <Row>
                    <Col>
                    <MDBBreadcrumb style={{ background: "#1c1c1c" }}>
                        <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;