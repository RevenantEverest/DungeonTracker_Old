import React, { Component } from 'react';
import '../css/CreateCampaign.css';

import { Redirect } from 'react-router-dom';

import CampaignForm from '../sections/CampaignForm';
import campaignServices from '../../services/campaignServices';

class CreateCampaign extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(data) {
        campaignServices.create(data)
        .then(campaign => {
            this.setState({ fireRedirect: true }, () => this.props.getManageCampaign(campaign.data.data));
        })
        .catch(err => console.error(err));
    }

    render() {
        return(
            <div id="CreateCampaign" className="app-page">
                <CampaignForm userData={this.props.userData} formType="Create" handleSubmit={this.handleSubmit} />
                {this.state.fireRedirect ? <Redirect to="/campaign" /> : ''}
            </div>
        );
    }
};

export default CreateCampaign;