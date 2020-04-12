import React, { Component } from 'react';
import '../css/HomePage.css';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBMask,
    MDBBtn,
    MDBView,
    MDBAnimation,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle
} from 'mdbreact';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    handleTogglerClick = () => {
        const { collapsed } = this.state;
        this.setState({ collapsed: !collapsed });
    };

    render() {
        return(
            <div>
            <MDBView src="https://cdn.discordapp.com/attachments/641112352795787313/641116156304031758/Aducrfet.png">
            <MDBMask className='white-text gradient' overlay="black-light" />
            <Container
                style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
                className='d-flex justify-content-center white-text align-items-center'
            >
                <Row>
                <Col md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                    <MDBAnimation type='fadeInLeft' delay='.3s'>
                    <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                        Manage Your Campaign
                    </h1>
                    <hr className='hr-light' />
                    <h6 className='mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                        veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                        molestiae iste.
                    </h6>
                    <Link to="/signup">
                    <MDBBtn color='unique' >Sign Up</MDBBtn>
                    </Link>
                    <MDBBtn outline color='white'>
                        Learn More
                    </MDBBtn>
                    </MDBAnimation>
                </Col>

                <Col md='6' xl='5' className='mt-xl-5'>
                    <MDBAnimation type='fadeInRight' delay='.3s'>
                    <img
                        src='https://i.imgur.com/eScvsG2.png'
                        alt=''
                        className='img-fluid HomePage-Icon'
                    />
                    </MDBAnimation>
                </Col>
                </Row>
            </Container>
            </MDBView>
            <Container style={{ marginTop: "5%", marginBottom: "5%" }}>
            <Row>
                <Col md={4}>
                    <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                        alt='Card cap'
                        />
                    </MDBView>

                    <MDBCardBody cascade className='text-center' style={{ background: "#1c1c1c" }}>
                        <MDBCardTitle className='card-title'>
                        <strong>Alice Mayer</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>DM</p>

                        <MDBCardText>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </Col>
                <Col md={4}>
                    <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                        alt='Card cap'
                        />
                    </MDBView>

                    <MDBCardBody cascade className='text-center' style={{ background: "#1c1c1c" }}>
                        <MDBCardTitle className='card-title'>
                        <strong>Alice Mayer</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>World Buildier</p>

                        <MDBCardText>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </Col>
                <Col md={4}>
                    <MDBCard wide cascade>
                    <MDBView cascade>
                        <MDBCardImage
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                        alt='Card cap'
                        />
                    </MDBView>

                    <MDBCardBody cascade className='text-center' style={{ background: "#1c1c1c" }}>
                        <MDBCardTitle className='card-title'>
                        <strong>Alice Mayer</strong>
                        </MDBCardTitle>

                        <p className='font-weight-bold blue-text'>Player</p>

                        <MDBCardText>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam.{' '}
                        </MDBCardText>
                    </MDBCardBody>
                    </MDBCard>
                </Col>
            </Row>
            </Container>
          </div>
        );
    }
};

export default HomePage;