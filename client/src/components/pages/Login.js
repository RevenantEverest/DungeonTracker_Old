import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBInput,
    MDBBtn,
    toast,
    ToastContainer
} from 'mdbreact';

import loginServices from '../../services/loginServices';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
    handleSubmit(e) {
        e.preventDefault();

        if(!this.state.email) return this.toggleFailureNotify("Email Field Cannot Be Empty");
        else if(!this.state.password) this.toggleFailureNotify("Password Field Cannot Be Empty");

        let data = {
            email: this.state.email,
            password: this.state.password
        };

        loginServices.login(data)
        .then(user => {
            window.localStorage.setItem('token', user.data.data.token)
            this.props.getUser(user.data.data);
        })
        .catch(err => {
            if(err.response)
                if(err.response.status === 401)
                    return this.toggleFailureNotify(err.response.data.error);
            else console.error(err);
        });
    }

    toggleFailureNotify = (reason) => toast.error(`${reason}`, { position: "top-center", autoClose: 5000 });

    render() {
        return(
            <div id="Login" style={{ marginTop: "5%", marginBottom: "5%" }}>
                <Container style={{ width: "50%", margin: "0 auto" }}>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                    <MDBCard
                        className='card-image'
                        style={{
                            backgroundImage: 'url(https://i.imgur.com/aDhWgqc.jpg)',
                            width: '28rem'
                        }}
                    >
                        <div className='text-white rgba-black-strong py-5 px-5 z-depth-4'>
                        <div className='text-center'>
                            <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                            <strong>LOGIN</strong>
                            </h3>
                        </div>
                        <MDBInput
                            label='Your Email'
                            group
                            type='text'
                            validate
                            name="email"
                            onChange={this.handleChange}
                            labelClass='white-text'
                            style={{ color: "white" }}
                        />
                        <MDBInput
                            label='Your Password'
                            group
                            type='password'
                            validate
                            name="password"
                            onChange={this.handleChange}
                            labelClass='white-text'
                            style={{ color: "white" }}
                        />
                        <p className="font-small grey-text d-flex justify-content-end">
                            Forgot
                            <a
                            href="#!"
                            className="dark-grey-text ml-1 font-weight-bold"
                            >
                            Password?
                            </a>
                        </p>
                        <Row className='d-flex align-items-center mb-4'>
                            <div className='text-center mb-3 col-md-12'>
                            <MDBBtn
                                color="unique"
                                rounded
                                type='button'
                                className='btn-block z-depth-1'
                                onClick={this.handleSubmit}
                            >
                                Sign in
                            </MDBBtn>
                            </div>
                        </Row>
                        <Col md={12}>
                            <p className='font-small white-text d-flex justify-content-end'>
                            Don't have an account?
                            <Link to="/signup" className='pink-text ml-1 font-weight-bold'>
                                Sign Up
                            </Link>
                            </p>
                        </Col>
                        </div>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>
                <ToastContainer position="top-center" autoClose={5000} newestOnTop hideProgressBar={true} />
                {this.props.userData ? <Redirect to="/dashboard" /> : ''}
            </div>
        );
    }
};

export default Login;