import React, { Component } from 'react';
import './Notes.css';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem
} from 'mdbreact';

class Notes extends Component {

    render() {
        return(
            <div id="Notes" className="app-page">
                <Container fluid>
                <Row>
                    <Col>
                    <MDBBreadcrumb style={{ background: "#1c1c1c" }}>
                        <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Notes</MDBBreadcrumbItem>
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
};

export default Notes;