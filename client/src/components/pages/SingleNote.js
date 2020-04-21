import React, { Component } from 'react';
import '../css/SingleNote.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBInput,
    MDBBtn
} from 'mdbreact';

import notesServices from '../../services/notesServices';

class SingleNote extends Component {

    _timer;

    constructor(props) {
        super(props);
        this.state = {
            note: this.props.location.state.data,
            content: this.props.location.state.data.content
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.refs.markdownContainer.scrollTop = this.refs.markdownContainer.scrollHeight;
        this.setState({ savingIcon: false });
        clearTimeout(this._timer);
        this.setState({ savingIcon: true });
        this._timer = setTimeout(() => {
            this.handleSubmit(e)
        }, 1000);
        this.setState({ [e.target.name]: e.target.value })
    };

    handleTitleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            id: this.state.note.id,
            title: this.state.title ? this.state.title : this.state.note.title,
            content: this.state.content,
            public: this.state.note.public
        };
        notesServices.update(data)
        .then(() => this.setState({ 
            savingIcon: false, 
            completeIcon: true, 
            editTitle: false
        }, () => this.resetCompleteIcon()))
        .catch(err => console.error(err));
    }

    resetCompleteIcon() {
        setTimeout(() => {
            this.setState({ completeIcon: false })
        }, 1000);
    }

    renderSaveIcon() {
        return(
            <div>
                Saving
                <div className="spinner-border spinner-border-sm ml-2" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    renderCompletedIcon() {
        return(
            <div>
                Saved
                <FontAwesomeIcon className="ml-2" icon="check" />
            </div>
        );
    }

    renderTitleForm() {
        return(
            <form className="display-inline w-100" onSubmit={this.handleSubmit}>
                <MDBInput 
                className="sn-title-input display-inline h5"
                hint={this.state.title ? this.state.title : this.state.note.title} 
                type="text" 
                name="title" 
                containerClass="sn-title-input-container"
                onChange={this.handleTitleChange}
                />
                <MDBBtn color="unique" className="display-inline mb-2" size="sm" onClick={this.handleSubmit}>
                    <FontAwesomeIcon icon="check" />
                </MDBBtn>
                <MDBBtn color="mdb-color" className="display-inline mb-2" size="sm" onClick={() => this.setState({ editTitle: false })}>
                    <FontAwesomeIcon icon="times" />
                </MDBBtn>
                
            </form>
        );
    }

    renderTitle() {
        return(
            <h5 className="h5 display-inline ml-2" onClick={() => this.setState({ editTitle: true })}>
                {this.state.title ? this.state.title : this.state.note.title}
            </h5>
        );
    }

    render() {
        const note = this.state.note;
        return(
            <div id="SingleNote" className="app-page">
                <Container fluid>
                <Row className="mb-2">
                    <Col>
                    <MDBBreadcrumb style={{ background: "#1c1c1c" }}>
                        <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem><Link to="/notes">Notes</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>{note.id}</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col>
                    <Link to="/notes">
                        <MDBBtn color="unique" className="ml-0" size="sm">
                            <FontAwesomeIcon className="mr-2" icon="arrow-left" /> 
                            Back to Notes
                        </MDBBtn>
                    </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <MDBCard style={{ background: "#1c1c1c", minHeight: "400px" }}>
                        <MDBCardHeader style={{ background: "#2c2c2c" }}>
                        {this.state.editTitle ? this.renderTitleForm() : this.renderTitle()}
                        </MDBCardHeader>
                        <MDBCardBody>
                        <Row>
                        <Col lg={6} md={12}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text SingleNote_InputIcon pr-3" id="basic-addon">
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
                        <Col lg={6} md={12}>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text SingleNote_InputIcon" id="basic-addon">
                                    <i className="fas fa-scroll prefix" />
                                    </span>
                                </div>
                                <div 
                                className="SingleNote_Input" 
                                ref="markdownContainer" 
                                style={{ padding: "10px", height: "270px", width: "90%", overflowY: "scroll" }}
                                >
                                <ReactMarkdown source={this.state.content} />
                                </div>
                            </div>    
                        </Col>
                        </Row>
                        <Row>
                            <Col>
                            {this.state.savingIcon ? this.renderSaveIcon() : ''}
                            {this.state.completeIcon && !this.state.savingIcon ? this.renderCompletedIcon() : ''}
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