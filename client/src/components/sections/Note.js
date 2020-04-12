import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardText,
    MDBBtn
} from 'mdbreact';

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const data = this.props.data;
        const contentPreview = data.content.substring(0, 100);
        return(
            <div className="Note">
                <MDBCard style={{ background: "#1c1c1c" }}>
                <MDBCardHeader style={{ background: "#2c2c2c" }}>{data.title}</MDBCardHeader>
                <MDBCardBody>
                <Row>
                    <Col>
                    <ReactMarkdown source={contentPreview} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Link to={{ pathname: `/notes/${data.id}`, state: { data: data} }}>
                        <MDBBtn color="unique" size="sm">Edit</MDBBtn>
                    </Link>
                    <MDBBtn color="elegant" size="sm">
                        <FontAwesomeIcon icon="trash-alt" />
                    </MDBBtn>
                    </Col>
                </Row>
                </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
};

export default Note;