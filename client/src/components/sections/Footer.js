import React, { Component } from 'react';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBFooter,
    MDBBtn
} from 'mdbreact';

class Footer extends Component {

    render() {
        return(
            <div id="Footer">
            <MDBFooter color="elegant-color-dark" className="page-footer font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                <MDBCol md="6">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    DungeonTracker.io
                    </h5>
                    <p>
                    Here you can use rows and columns here to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    </p>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    Contact
                    </h5>
                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">DungeonTracker@gmail.com</a>
                    </li>
                    </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    Useful Links
                    </h5>
                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">Frequently Asked Questions</a>
                    </li>
                    <li>
                        <a href="#!">Premium</a>
                    </li>
                    <li>
                        <a href="#!">Changelogs</a>
                    </li>
                    </ul>
                </MDBCol>
                <hr className="clearfix w-100 d-md-none" />
                <MDBCol md="2">
                    <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                    Resources
                    </h5>
                    <ul className="list-unstyled">
                    <li>
                        <a href="#!">Support</a>
                    </li>
                    <li>
                        <a href="#!">Documentation</a>
                    </li>
                    </ul>
                </MDBCol>
                </MDBRow>
            </MDBContainer>
            <hr />
            <div className="text-center py-3">
                <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                    <h5 className="mb-1">Create your first campaign!</h5>
                </li>
                <li className="list-inline-item">
                    <MDBBtn color="unique" size="md">Create Campaign</MDBBtn>
                </li>
                </ul>
            </div>
            <hr />
            <div className="text-center">
                <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm btn-fb mx-1">
                    <i className="fab fa-facebook-f"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm btn-tw mx-1">
                    <i className="fab fa-twitter"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm btn-gplus mx-1">
                    <i className="fab fa-google-plus"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm btn-li mx-1">
                    <i className="fab fa-linkedin-in"> </i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#!" className="btn-floating btn-sm btn-dribbble mx-1">
                    <i className="fab fa-dribbble"> </i>
                    </a>
                </li>
                </ul>
            </div>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="https://dungeontracker.io"> DungeonTracker.io </a>
                </MDBContainer>
            </div>
            </MDBFooter>
            </div>
        );
    }
};

export default Footer;