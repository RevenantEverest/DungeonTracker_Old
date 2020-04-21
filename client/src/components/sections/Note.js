import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBBtn
} from 'mdbreact';

import notesServices from '../../services/notesServices';

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    deleteNote() {
        notesServices.delete(this.props.data.id)
        .then(() => this.props.getNotes())
        .catch(err => console.error(err));
    }

    render() {
        const data = this.props.data;
        const contentPreview = data.content.replace(/#/gi, "").substring(0, 100);
        return(
            <div className="Note">
                <MDBCard style={{ background: "#1c1c1c", height: "300px" }}>
                <MDBCardHeader style={{ background: "#2c2c2c" }}>{data.title}</MDBCardHeader>
                <MDBCardBody>
                <Row style={{ height: "160px", maxHeight: "160px", overflowY: "hidden" }}>
                    <Col>
                    <ReactMarkdown source={contentPreview.length >= 100 ? contentPreview + "..." : contentPreview} />
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                    <Link to={{ pathname: `/notes/${data.id}`, state: { data: data} }}>
                        <MDBBtn color="unique" size="sm">Edit</MDBBtn>
                    </Link>
                    <MDBBtn color="elegant" size="sm" onClick={() => this.deleteNote()}>
                        <FontAwesomeIcon icon="trash-alt" />
                    </MDBBtn>
                    </Col>
                    <Col>
                    <p className="h6 mt-2">Created: {moment(data.date).format("MMMM Do YYYY")}</p>
                    </Col>
                </Row>
                </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
};

export default Note;