import React, { Component } from 'react';
import '../css/SingleNote.css';

import ReactMarkdown from 'react-markdown';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCard,
    MDBCardHeader,
    MDBCardBody
} from 'mdbreact';

class SingleNote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            note: this.props.location.state.data,
            content: this.props.location.state.data.content
        };
    }

    handleChange = (e) => {
        this.refs.markdownContainer.scrollTop = this.refs.markdownContainer.scrollHeight
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        const note = this.state.note;
        return(
            <div id="SingleNote" className="app-page">
                <Container fluid>
                <Row className="mb-5">
                    <Col>
                    <MDBBreadcrumb style={{ background: "#1c1c1c" }}>
                        <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem><Link to="/notes">Notes</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>{note.id}</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <MDBCard style={{ background: "#1c1c1c" }}>
                        <MDBCardHeader style={{ background: "#2c2c2c" }}>{note.title}</MDBCardHeader>
                        <MDBCardBody>
                        <Row>
                        <Col>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text SingleNote_InputIcon" id="basic-addon">
                                    <i className="fas fa-pencil-alt prefix" />
                                    </span>
                                </div>
                                <textarea 
                                className="form-control SingleNote_Input" 
                                id="exampleFormControlTextarea1" 
                                rows="10"
                                name="content"
                                value={this.state.content}
                                onChange={this.handleChange}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text SingleNote_InputIcon" id="basic-addon">
                                    <i className="fas fa-scroll prefix" />
                                    </span>
                                </div>
                                <div 
                                className="SingleNote_Input" 
                                ref="markdownContainer" 
                                style={{ padding: "10px", height: "270px", minWidth: "90%", overflowY: "scroll" }}
                                >
                                <ReactMarkdown  source={this.state.content} />
                                </div>
                            </div>    
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

export default SingleNote;