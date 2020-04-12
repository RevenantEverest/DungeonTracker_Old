import React, { Component } from 'react';
import '../css/CampaignForm.css';

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBSelect,
    MDBFileInput,
    MDBAvatar,
    MDBView,
    MDBMask,
    MDBBtn,
    toast,
    ToastContainer
} from 'mdbreact';

class CampaignForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [
                { text: "Original", value: "Original" },
                { text: "Advanced", value: "Advanced" },
                { text: "Advanced 2nd Edition", value: "Advanced 2nd Edition" },
                { text: "3rd Edition", value: "3rd Edition" },
                { text: "D&D v3.5", value: "v3.5" },
                { text: "4th Edition", value: "4th Edition" },
                { text: "5th Edition", value: "5th Edition" }
            ]
        };
        this.handleImage = this.handleImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getValueChange = this.getValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    getValueChange = (value) => this.setState({ edition: value[0] });
    handleSubmit(e) {
        e.preventDefault();
        let campaignData = this.props.campaignData || null;
        let data = {};
        data.owner_id = this.props.userData.id;
        if(campaignData) {
            data =  {
                id: campaignData.id,
                name: this.state.name ? this.state.name : campaignData.name,
                description: this.state.description ? this.state.description : campaignData.description,
                edition: this.state.edition ? this.state.edition : campaignData.edition,
                avatar: this.state.avatar ? this.state.avatar : campaignData.avatar
            };
        }
        else {
            if(!this.state.name) return this.toggleFailureNotify("Name Field Cannot Be Empty");
            else if(!this.state.description) return this.toggleFailureNotify("Description Field Cannot Be Empty");
            else if(!this.state.edition) return this.toggleFailureNotify("Edition Field Cannot Be Empty");
            data = {
                owner_id: this.props.userData.id,
                name: this.state.name,
                description: this.state.description,
                edition: this.state.edition,
                avatar: this.state.avatar ? this.state.avatar : ''
            };
        }

        this.props.handleSubmit(data);
    };

    handleImage(file) {
        let reader = new FileReader();
        let url = reader.readAsDataURL(file[0]);

        reader.onloadend = function (e) {
            this.setState({ imageSrc: [reader.result], avatar: file[0] });
        }.bind(this);
    };

    toggleFailureNotify = (reason) => toast.error(`${reason}`, { position: "top-center", autoClose: 5000 });

    render() {
        return(
            <div id="CampaignForm">
                <Container>
                <Row>
                    <Col>
                    <MDBCard style={{ background: "#1c1c1c" }}>
                        <div className="header pt-3 ripe-malinka-gradient">
                        <Row className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">
                            {this.props.formType} Campaign
                            </h3>
                        </Row>
                        <Row className="mt-2 mb-3 d-flex justify-content-center">

                        </Row>
                        </div>
                        <MDBCardBody className="mx-4 mt-4 mb-5">
                        <Row>
                        <Col lg={3}>
                            <MDBView hover className="CampaignForm-Image">
                            <MDBAvatar
                                src={this.state.imageSrc ? this.state.imageSrc : "https://i.imgur.com/uxsh2gc.png"}
                                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                                tag="img"
                                alt="Sample avatar"
                            />
                            <MDBMask className="flex-center" overlay="black-strong">
                                <Row>
                                <Col>
                                <MDBFileInput getValue={this.handleImage} />
                                </Col>
                                </Row>
                            </MDBMask>
                            </MDBView>
                        </Col>
                        <Col>
                            <Row style={{ marginBottom: "2%" }}>
                                <Col>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text CampaignForm_InputIcon" style={{ paddingRight: "15px" }} id="basic-addon">
                                    <i className="fa fa-globe-americas prefix" />
                                    </span>
                                </div>
                                <input 
                                type="text" 
                                className="form-control CampaignForm_Input" 
                                placeholder="Campaign Name" 
                                name="name"
                                aria-describedby="basic-addon"
                                onChange={this.handleChange}
                                />
                                </div>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "2%" }}>
                                <Col>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text CampaignForm_InputIcon" id="basic-addon">
                                        <i className="fas fa-scroll prefix"></i>
                                        </span>
                                    </div>
                                    <textarea 
                                    className="form-control CampaignForm_Input" 
                                    id="exampleFormControlTextarea1" 
                                    rows="4"
                                    name="description"
                                    placeholder="Campaign Description"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div className="input-group CampaignForm_Select">
                                <div className="input-group-prepend">
                                    <span className="input-group-text CampaignForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                    <i className="fa fa-book prefix" />
                                    </span>
                                </div>
                                <MDBSelect
                                options={this.state.options}
                                selected="Choose your edition"
                                labelClass="CampaignForm_Select"
                                className="form-control CampaignForm_Select"
                                getValue={this.getValueChange}
                                />
                                </div>
                                </Col>
                            </Row>
                            <Row className="d-flex align-items-center mb-4 mt-3">
                                <Col md="5" className="d-flex">
                                <div className="text-center">
                                    <MDBBtn
                                    color="unique"
                                    size="md"
                                    type="button"
                                    className="z-depth-1a m-0"
                                    onClick={this.handleSubmit}
                                    >
                                    Create
                                    </MDBBtn>
                                </div>
                                </Col>
                            </Row>
                        </Col>
                        </Row>
                        </MDBCardBody>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>
                <ToastContainer position="top-center" autoClose={5000} newestOnTop hideProgressBar={true} />
            </div>
        );
    }
};

export default CampaignForm;