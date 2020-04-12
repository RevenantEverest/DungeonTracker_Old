import React, { Component } from 'react';
import '../css/InviteUser.css';

import { Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBBtn,
    toast,
    ToastContainer
} from 'mdbreact';

import inviteServices from '../../services/inviteServices';

class InviteUser extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    handleSubmit(e) {
        e.preventDefault();

        if(!this.state.username) return this.toggleFailureNotify("Username Field Is Empty");

        let data = {
            username: this.state.username,
            campaign_id: this.props.manageCampaign.id
        };

        inviteServices.invite(data)
        .then(() => this.toggleSuccessNotify())
        .catch(err => {
            if(err.response)
                if(err.response.status === 404)
                    this.toggleFailureNotify(err.response.data.error);
            console.error(err);
        });
    }

    toggleSuccessNotify = () => toast.success("User Invited!", { position: "top-center", autoClose: 5000 });
    toggleFailureNotify = (reason) => toast.error(`${reason}`, { position: "top-center", autoClose: 5000 });

    render() {
        return(
            <div id="InviteUser">
                <MDBCard style={{ background: "#1c1c1c" }}>
                <MDBCardBody>
                    <MDBCardTitle className="font-weight-bold">Invite User</MDBCardTitle>
                    <Row>
                        <Col md={4}>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text InviteUser_InputIcon" id="basic-addon">
                            <i className="fa fa-user prefix"></i>
                            </span>
                        </div>
                        <input
                        type="text" 
                        className="form-control InviteUser_Input"
                        placeholder="Enter A Username"
                        name="username"
                        aria-label="Username"
                        aria-describedby="basic-addon"
                        onChange={this.handleChange}
                        />
                        </div>
                        </Col>
                        <Col>
                            <MDBBtn color="unique" className="mt-0 ml-0" size="md" onClick={this.handleSubmit}>Send Invite</MDBBtn>
                        </Col>
                    </Row>
                </MDBCardBody>
                </MDBCard>
                <ToastContainer position="top-center" autoClose={5000} newestOnTop hideProgressBar={true} />
            </div>
        );
    }
};

export default InviteUser;