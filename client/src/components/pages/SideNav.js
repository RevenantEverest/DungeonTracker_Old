import React, { Component } from "react";
import '../css/SideNav.css';

import { Link, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Image } from 'react-bootstrap';
import {
    MDBSideNav,
    MDBIcon,
    MDBSideNavNav,
    MDBSideNavCat,
    MDBSideNavItem,
    MDBSideNavLink,
    MDBNavbar,
    MDBNavItem,
    MDBNavbarNav,
    MDBContainer,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdown,
    MDBDropdownItem,
    MDBBtn,
    MDBBadge
} from 'mdbreact';

import Dashboard from './Dashboard';

import CampaignSelect from '../sections/CampaignSelect';
import Campaign from './Campaign';
import CampaignSettings from './CampaignSettings';
import CreateCampaign from './CreateCampaign';
import Finances from './Finances';

import Characters from './Characters';
import CharacterProfile from '../sections/CharacterProfile';
import CreateCharacter from './CreateCharacter';

import Notes from './Notes';
import SingleNote from './SingleNote';

import Account from './Account';
import Footer from '../sections/Footer';

import env from '../../env';

class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleStateA: false,
            breakWidth: 1300,
            windowWidth: 0,
            switch2: false
        };
    }
    
    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }
    
    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }
    handleResize = () => this.setState({ windowWidth: window.innerWidth });
    handleToggleClickA = () => this.setState({ toggleStateA: !this.state.toggleStateA });
    handleSwitchChange = nr => () => this.setState({ [`switch${nr}`]: !this.state[`switch${nr}`] });

    handleLogout() {
        window.localStorage.clear();
        window.location.pathname = "/";
    }

    renderCampaignSelect() {
        return(
            <Col xs={8}>
            <MDBNavItem>
                <CampaignSelect 
                nav
                userData={this.props.userData} 
                manageCampaign={this.props.manageCampaign}
                campaignData={this.state.campaignData}
                getManageCampaign={this.props.getManageCampaign} 
                togglePostCollapse={this.togglePostCollapse} 
                />
            </MDBNavItem>
            </Col>
        );
    }

    renderSettings() {
        if(parseInt(this.props.manageCampaign.owner_id, 10) === this.props.userData.id) {
            return(
                <MDBSideNavLink to="/campaign/settings" className="SideNav-El">
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="cogs" />
                    Settings
                </MDBSideNavLink>
            );
        }
        else return <br />;
    }

    renderUserAvatar() {
        if(this.props.userData.avatar === "") return <FontAwesomeIcon icon="user" style={{ marginRight: "5%" }} />;
        else return <Image src={`${env.API}/${this.props.userData.avatar}`} roundedCircle style={{ height: "32px", border: "solid 3px #151515" }} />;
    }

    render() {
        const userData = this.props.userData;
        const manageCampaign = this.props.manageCampaign;
        const getManageCampaign = this.props.getManageCampaign;
        
        const navStyle = {
            paddingLeft: this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
        };
    
        const mainStyle = {
            margin: "0 6%",
            paddingTop: "5.5rem",
            paddingLeft: this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
        };
    
        const specialCaseNavbarStyles = {
            WebkitBoxOrient: "horizontal",
            flexDirection: "row"
        };
        return(
            <div className="fixed-sn black-skin">
            <MDBSideNav
                className="SideNav"
                logo="https://i.imgur.com/s0OF8d4.png"
                triggerOpening={this.state.toggleStateA}
                breakWidth={this.state.breakWidth}
                bg="https://i.imgur.com/aDhWgqc.jpg"
                mask="strong"
                href="/"
                fixed
            >
                <MDBSideNavNav>
                <MDBSideNavLink to="/dashboard" topLevel className="SideNav-El">
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="tachometer-alt" />
                    Dashboard
                </MDBSideNavLink>
                <MDBSideNavCat name="Campaign" id="campaign-cat" icon="globe-americas" className="SideNav-El">
                    <MDBSideNavLink to="/campaign" className="SideNav-Dropdown-El">Overview</MDBSideNavLink>
                    <MDBSideNavLink to="/campaign/inventory" className="SideNav-Dropdown-El">Inventory</MDBSideNavLink>
                    <MDBSideNavLink to="/campaign/finances" className="SideNav-Dropdown-El">Finances</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name="Characters" id="characters-cat" icon="users" className="SideNav-El">
                    <MDBSideNavLink to="/characters" className="SideNav-Dropdown-El">Overview</MDBSideNavLink>
                    <MDBSideNavLink to="/characters/heroes" className="SideNav-Dropdown-El">Heroes</MDBSideNavLink>
                    <MDBSideNavLink to="/characters/npc" className="SideNav-Dropdown-El">NPCs</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name="Places" id="places-cat" icon="map" className="SideNav-El">
                    <MDBSideNavLink to="/map" className="SideNav-Dropdown-El">Map</MDBSideNavLink>
                    <MDBSideNavLink to="/map/cities" className="SideNav-Dropdown-El">Cities</MDBSideNavLink>
                    <MDBSideNavLink to="/map/towns" className="SideNav-Dropdown-El">Towns</MDBSideNavLink>
                    <MDBSideNavLink to="/map/shops" className="SideNav-Dropdown-El">Shops</MDBSideNavLink>
                </MDBSideNavCat>
                <MDBSideNavCat name="Organizations" id="organizations-cat" icon="address-card" className="SideNav-El">
                    <MDBSideNavItem className="SideNav-Dropdown-El">Overview</MDBSideNavItem>
                    <MDBSideNavItem className="SideNav-Dropdown-El">Registration form</MDBSideNavItem>
                </MDBSideNavCat>
                <MDBSideNavLink to="/notes" topLevel className="SideNav-El">
                    <FontAwesomeIcon className="FontAwesomeIcon" icon="book" />
                    Notes
                </MDBSideNavLink>
                <br />
                <br />
                {manageCampaign ? this.renderSettings() : <br />}
                </MDBSideNavNav>
            </MDBSideNav>
            <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
                <MDBNavbarNav left>
                <MDBNavItem>
                    <div
                    onClick={this.handleToggleClickA}
                    key="sideNavToggleA"
                    style={{
                        lineHeight: "32px",
                        marginRight: "1em",
                        verticalAlign: "middle"
                    }}
                    >
                    <MDBIcon icon="bars" color="white" size="2x" />
                    </div>
                </MDBNavItem>
                {this.state.windowWidth > 800 ? this.renderCampaignSelect() : ''}
                </MDBNavbarNav>
                <MDBNavbarNav right style={specialCaseNavbarStyles}>
                {this.state.windowWidth > 800 ? '' : this.renderCampaignSelect()}
                <MDBNavItem>
                    <Link to="#">
                    <MDBBtn color="elegant" size="sm">
                        <MDBIcon size="lg" icon="bell" />
                        <MDBBadge color="danger" className="ml-2" style={{ padding: "4px", fontSize: "10px" }}>2</MDBBadge>
                    </MDBBtn>
                    </Link>
                </MDBNavItem>
                <MDBNavItem>
                    <Link to="/campaign/create">
                    <MDBBtn color="unique" size="sm">Create Campaign</MDBBtn>
                    </Link>
                </MDBNavItem>
                <MDBNavItem>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                    {userData ? this.renderUserAvatar() : <FontAwesomeIcon icon="user" style={{ marginRight: "5%" }} />}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right={this.state.width > 800 ? true : false} className="dropdown-default SideNav-TopNav__DropDownMenu">
                    <MDBSideNavLink to="/account" style={{ padding: 0 }}>
                    <MDBDropdownItem className="SideNav-TopNav-Dropdown-Item" style={{ padding: "10px 15px 10px 15px" }}>
                            <FontAwesomeIcon className="FontAwesomeIcon SideNav-TopNav-Dropdown-Item-Span" icon="user-alt" />
                            <span className="SideNav-TopNav-Dropdown-Item-Span">Account</span>
                    </MDBDropdownItem>
                    </MDBSideNavLink>
                    <MDBDropdownItem divider />
                    <MDBDropdownItem className="SideNav-TopNav-Dropdown-Item" onClick={() => this.handleLogout()}>
                        <FontAwesomeIcon className="FontAwesomeIcon SideNav-TopNav-Dropdown-Item-Span" icon="sign-out-alt" />
                        <span className="SideNav-TopNav-Dropdown-Item-Span">Logout</span>
                    </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
            <main style={mainStyle}>
                <MDBContainer fluid className="mt-5">
                    <Route exact path="/dashboard" component={() => (<Dashboard userData={userData} manageCampaign={manageCampaign} />)} />
                    <Route exact path="/campaign" component={() => (<Campaign userData={userData} manageCampaign={manageCampaign} />)} />
                    <Route exact path="/campaign/settings" component={() => (<CampaignSettings userData={userData} manageCampaign={manageCampaign} />)} />
                    <Route exact path="/campaign/finances" component={() => (<Finances userData={userData} manageCampaign={manageCampaign} />)} />
                    <Route exact path="/notes" component={() => (<Notes userData={userData} manageCampaign={manageCampaign} />)} />
                    <Route exact path="/notes/:note" component={SingleNote} />
                    <Route exact path="/characters" component={() => (<Characters userData={userData} manageCampaign={manageCampaign} />)} />
                    <Route exact path="/characters/npc/:name" component={CharacterProfile} />
                    <Route exact path="/characters/hero/:name" component={CharacterProfile} />
                    <Route 
                    exact path="/campaign/create" 
                    component={() => (<CreateCampaign userData={userData} manageCampaign={manageCampaign} getManageCampaign={getManageCampaign} />)}
                    />
                    <Route 
                    exact path="/characters/create" 
                    component={() => (<CreateCharacter userData={userData} manageCampaign={manageCampaign} getManageCampaign={getManageCampaign} />)}
                    />
                    <Route exact path="/account" component={() => (<Account userData={userData} />)} />
                </MDBContainer>
            </main>
            <Footer />
            </div>
        );
    }
};

export default SideNav;