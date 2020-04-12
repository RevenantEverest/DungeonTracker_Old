import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn
} from 'mdbreact';

import Note from '../sections/Note';

import notesServices from '../../services/notesServices';

class Notes extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
        this.getNotes();
    }

    componentWillUnmount = () => this._isMounted = false;

    getNotes() {
        if(!this._isMounted || !this.props.manageCampaign) return;
        notesServices.getByCampaignIdAndUserId({ user_id: this.props.userData.id, campaign_id: this.props.manageCampaign.id })
        .then(notes => this.setState({ notes: notes.data.data }))
        .catch(err => console.error(err));
    }

    createNote() {
        const userId = this.props.userData.id;
        const campaignId = this.props.manageCampaign.id;
        let data = { user_id: userId, campaign_id: campaignId, title: "New Note", content: "", public: false };

        notesServices.save(data)
        .then(() => this.getNotes())
        .catch(err => console.error(err));
    }

    renderSpinner() {
        return;
    }

    renderCreateNote() {
        return(
            <Row >
                <Col className="d-flex flex-row-reverse">
                    <div className="p-2">
                    <MDBBtn color="unique" size="md" onClick={() => this.createNote()}>Create Note</MDBBtn>
                    </div>
                </Col>
            </Row>
        );
    }

    renderNotes() {
        let Notes = this.state.notes.map((el, idx) => {
            return(
                <Col md={6} key={idx}>
                    <Note data={el} />
                </Col>
            );
        });
        return Notes;
    }

    render() {
        const userData = this.props.userData;
        const manageCampaign = this.props.manageCampaign;
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
                {!manageCampaign ? this.renderSpinner() : this.renderCreateNote()}
                <Row>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    {manageCampaign && this.state.notes ? this.renderNotes() : ''}
                </Row>
                </Container>
            </div>
        );
    }
};

export default Notes;