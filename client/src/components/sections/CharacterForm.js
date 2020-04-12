import React, { Component } from 'react';
import '../css/CharacterForm.css';

import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBView,
    MDBMask,
    MDBAvatar,
    MDBFileInput,
    MDBBtn,
    toast,
    ToastContainer
} from 'mdbreact';

class CharacterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleImage = this.handleImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange  = (e) => this.setState({ [e.target.name]: e.target.value });
    handleValueChange = (value) => console.log(value);
    handleSubmit(e) {
        e.preventDefault();

        if(!this.state.name) return this.toggleFailureNotify("Name Field Cannot Be Empty");
        else if(!this.state.description) return this.toggleFailureNotify("Description Field Cannot Be Empty");
        else if(!this.state.edition) return this.toggleFailureNotify("Edition Field Cannot Be Empty");

        let data = {

        };

        this.props.handleSubmit(data);
    }

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
            <div id="CharacterForm">
                <Container>
                <Row>
                    <Col>
                    <MDBCard style={{ background: "#1c1c1c" }}>
                        <div className="header pt-3 ripe-malinka-gradient">
                        <Row className="d-flex justify-content-center">
                            <h3 className="white-text mb-3 pt-3 font-weight-bold">
                            {this.props.formType} Character
                            </h3>
                        </Row>
                        <Row className="mt-2 mb-3 d-flex justify-content-center">

                        </Row>
                        </div>
                        <MDBCardBody className="mx-4 mt-4 mb-5">
                        <Row>
                        <Col lg={3}>
                            <MDBView hover className="CharacterForm-Image">
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
                                    <span className="input-group-text CharacterForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                    <i className="fa fa-user prefix" />
                                    </span>
                                </div>
                                <input 
                                type="text" 
                                className="form-control CharacterForm_Input" 
                                placeholder="Name" 
                                name="name"
                                aria-describedby="basic-addon"
                                onChange={this.handleChange}
                                />
                                </div>
                                </Col>
                                <Col>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text CharacterForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                    <i className="fa fa-venus-mars prefix" />
                                    </span>
                                </div>
                                <input 
                                type="text" 
                                className="form-control CharacterForm_Input" 
                                placeholder="Gender" 
                                name="Gender"
                                aria-describedby="basic-addon"
                                onChange={this.handleChange}
                                />
                                </div>
                                </Col>
                                <Col>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text CharacterForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                    <i className="fa fa-id-card prefix" />
                                    </span>
                                </div>
                                <input 
                                type="text" 
                                className="form-control CharacterForm_Input" 
                                placeholder="Race" 
                                name="race"
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
                                    <span className="input-group-text CharacterForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                    <i className="fa fa-user-graduate prefix" />
                                    </span>
                                </div>
                                <input 
                                type="text" 
                                className="form-control CharacterForm_Input" 
                                placeholder="Profession" 
                                name="profession"
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
                                        <span className="input-group-text CharacterForm_InputIcon" id="basic-addon">
                                        <i className="fas fa-scroll prefix"></i>
                                        </span>
                                    </div>
                                    <textarea 
                                    className="form-control CharacterForm_Input" 
                                    id="exampleFormControlTextarea1" 
                                    rows="4"
                                    name="description"
                                    placeholder="Description"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "2%" }}>
                                <Col>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text CharacterForm_InputIcon" id="basic-addon">
                                        <i className="fas fa-trophy prefix"></i>
                                        </span>
                                    </div>
                                    <textarea 
                                    className="form-control CharacterForm_Input" 
                                    id="exampleFormControlTextarea1" 
                                    rows="4"
                                    name="motivations"
                                    placeholder="Motivations"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                </Col>
                                <Col>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text CharacterForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                        <i className="fas fa-book prefix"></i>
                                        </span>
                                    </div>
                                    <textarea 
                                    className="form-control CharacterForm_Input" 
                                    id="exampleFormControlTextarea1" 
                                    rows="4"
                                    name="background"
                                    placeholder="Background"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "2%" }}>
                                <Col>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text CharacterForm_InputIcon" id="basic-addon">
                                        <i className="fas fa-heart-broken prefix"></i>
                                        </span>
                                    </div>
                                    <textarea 
                                    className="form-control CharacterForm_Input" 
                                    id="exampleFormControlTextarea1" 
                                    rows="4"
                                    name="flaws"
                                    placeholder="Flaws"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                </Col>
                                <Col>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text CharacterForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                        <i className="fas fa-shield-alt prefix"></i>
                                        </span>
                                    </div>
                                    <textarea 
                                    className="form-control CharacterForm_Input" 
                                    id="exampleFormControlTextarea1" 
                                    rows="4"
                                    name="ideals"
                                    placeholder="Ideals"
                                    onChange={this.handleChange}
                                    />
                                </div>
                                </Col>
                            </Row>
                            <Row style={{ marginBottom: "2%" }}>
                                <Col>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text CharacterForm_InputIcon" style={{ paddingRight: "18px" }} id="basic-addon">
                                    <i className="fa fa-award prefix" />
                                    </span>
                                </div>
                                <input 
                                type="text" 
                                className="form-control CharacterForm_Input" 
                                placeholder="Skills" 
                                name="skills"
                                aria-describedby="basic-addon"
                                onChange={this.handleChange}
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

export default CharacterForm;