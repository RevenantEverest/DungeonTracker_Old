import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBBtn
} from 'mdbreact';

class NavBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
      
    toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });

    renderLoggedIn() { 
        if(!this.props.userData)
            return <Link to="/login"><MDBBtn color="unique" size="sm">Login</MDBBtn></Link>;
        else 
            return <Link to="/dashboard"><MDBBtn color="unique" size="sm">Go To Dashboard</MDBBtn></Link>; 
    }

    render() {
        return(
            <div id="NavBar">
            <MDBNavbar fixed="top" color="elegant-color-dark" dark expand="md">
                <Container>
                <MDBNavbarBrand href="/">
                    <strong>DungeonTracker</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem active={this.props.location.pathname === "/" ? true : false}>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.props.location.pathname === "/features" ? true : false}>
                        <MDBNavLink to="/features">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.props.location.pathname === "/pricing" ? true : false}>
                        <MDBNavLink to="/pricing">Pricing</MDBNavLink>
                    </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                    <MDBNavItem>
                        {this.renderLoggedIn()}
                    </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
                </Container>
            </MDBNavbar>
            </div>
        );
    }
};

export default withRouter(NavBar);