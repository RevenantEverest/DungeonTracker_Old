import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
    faEnvelope, faUser, faPhone, faArrowCircleRight, faGlobeAmericas, 
    faTachometerAlt, faMagic, faChartLine, faCoins, faInfoCircle, 
    faCrown, faComments, faMusic, faAward, faBolt,
    faSignOutAlt, faCode, faCog, faCogs, faUserAstronaut,
    faTrashAlt, faNewspaper, faBullhorn, faCompactDisc, faClock, 
    faHeadphonesAlt, faArrowAltCircleRight, faTimes, faCrosshairs, faEdit, 
    faLink, faLightbulb, faSearch, faArrowLeft, faArrowRight, 
    faAngleLeft, faAngleRight, faUsers, faGem, faQuestionCircle, 
    faPencilAlt, faSearchPlus, faUserAlt, faArrowUp, faArrowDown, 
    faPlayCircle, faPauseCircle, faForward, faVolumeUp, faVolumeDown, 
    faVolumeMute, faMinusCircle, faBook, faMars, faVenus, 
    faShieldAlt, faAddressBook, faAddressCard, faMap, faCheck
} from '@fortawesome/free-solid-svg-icons';

import NavBar from './components/sections/NavBar';
import SideNav from './components/pages/SideNav';
import HomePage from './components/pages/HomePage';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Footer from './components/sections/Footer';

import loginServices from './services/loginServices';

library.add(fab);
library.add(faEnvelope, faUser, faArrowCircleRight, faPhone, faGlobeAmericas);
library.add(faTachometerAlt, faMagic, faChartLine, faCrown, faCoins, faInfoCircle, faComments, faMusic, faAward, faBolt, faSignOutAlt);
library.add(faCode, faCog, faCogs, faUserAstronaut);
library.add(faTrashAlt, faNewspaper, faBullhorn, faCompactDisc, faClock, faHeadphonesAlt, faArrowAltCircleRight, faTimes);
library.add(faCrosshairs, faEdit, faLink, faLightbulb, faSearch);
library.add(faArrowLeft, faArrowRight, faAngleLeft, faAngleRight, faUsers);
library.add(faGem, faQuestionCircle, faPencilAlt, faSearchPlus, faUserAlt);
library.add(faArrowUp, faArrowDown, faPlayCircle, faPauseCircle, faForward);
library.add(faVolumeUp, faVolumeDown, faVolumeMute, faMinusCircle, faBook);
library.add(faMars, faVenus, faShieldAlt, faAddressBook, faAddressCard);
library.add(faMap, faCheck);

class App extends Component {

    _ApplicationRoutes = [
        "/dashboard",
        "/characters",
        "/characters/:characters",
        "/campaign",
        "/campaign/:campaign",
        "/map",
        "/map/:places",
        "/organizations",
        "/organizations/:organizations",
        "/notes",
        "/notes/:notes",
        "/account",
        "/account/:account"
    ];

    _FooterRoutes = [
        "/",
        "/signup",
        "/login",
        "/features",
        "/pricing"
    ];

    _isMounted = false;

    constructor() {
        super();
        this.state = {
            userData: null,
            manageCampaign: null
        };
        this.getUser = this.getUser.bind(this);
        this.getManageCampaign = this.getManageCampaign.bind(this);
    };

    componentDidMount() {
        this._isMounted = true;
        this.checkForUser();
    }

    componentWillUnmount = () => this._isMounted = false;

    checkForUser() {
        if(!this._isMounted || !window.localStorage.getItem("token")) return;

        loginServices.verify(window.localStorage.token)
        .then(user => this.setState({ userData: user.data.data }))
        .catch(err => {
            window.localStorage.clear();
            console.error(err);
        });
    }

    getUser = (user) => this.setState({ userData: user });
    getManageCampaign = (campaign) => this.setState({ manageCampaign: campaign });

    render() {
        return(
            <div id="App">
            <Router>
                <div>
                <NavBar userData={this.state.userData} />
                <Route exact path="/" component={() => (<HomePage userData={this.state.userData} />)} />
                <Route exact path="/signup" component={() => (<SignUp userData={this.state.userData} getUser={this.getUser} />)} />
                <Route exact path="/login" component={() => (<Login userData={this.state.userData} getUser={this.getUser} />)} />
                <Route 
                exact 
                path={this._ApplicationRoutes} 
                component={() => (
                    <SideNav 
                    userData={this.state.userData}
                    manageCampaign={this.state.manageCampaign}
                    getManageCampaign={this.getManageCampaign}
                    />
                )}
                />
                <Route exact path={this._FooterRoutes} component={Footer} />
                </div>
            </Router>
            </div>
        );
    }
};

export default App;