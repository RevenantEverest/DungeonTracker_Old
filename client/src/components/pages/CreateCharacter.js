import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import CharacterForm from '../sections/CharacterForm';

import characterServices from '../../services/characterServices';

class CreateCharacter extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
        const userData = this.props.userData;
        const manageCampaign = this.props.manageCampaign;
        return(
            <div id="CreateCharacter" className="app-page">
            <CharacterForm 
            userData={userData} 
            manageCampaign={manageCampaign} 
            formType="Create"
            handleSubmit={this.handleSubmit}
            />
            {
                this.state.fireRedirect ? 
                    <Redirect to={{
                        pathname: `/characters/npc/${this.state.characterData.name}`,
                        state: {
                            userData: userData,
                            manageCampaign: manageCampaign,
                            characterData: this.state.characterData
                        }
                    }} />
                : ''
            }
            </div>
        );
    }
};

export default CreateCharacter;