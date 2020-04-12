import React, { Component } from 'react';
import '../css/CampaignSelect.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Image } from 'react-bootstrap';
import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdbreact';

import env from '../../env';

import campaignServices from '../../services/campaignServices';

class CampaignSelect extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
        this.getCampaigns();
    }

    componentWillUnmount = () => this._isMounted = false;

    getCampaigns() {
        if(!this._isMounted) return;
        if(!this.props.userData) return;
        campaignServices.getCampaigns(this.props.userData.id)
        .then(campaigns => {
            this.setState({ 
                campaignData: campaigns.data.data, 
                chosenCampaign: this.props.manageCampaign ? this.props.manageCampaign : null
            })
        })
        .catch(err => console.error(err));
    }

    handleChange(el) {
        this.props.getManageCampaign(el);
    }

    renderSpinner() {
        return(
            <MDBDropdown>
            <MDBDropdownToggle color="elegant" size={this.props.nav ? "sm" : "lg"} className="d-none d-md-inline CampaignSelect-DropDown">
                <div className="spinner-border spinner-border-sm" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </MDBDropdownToggle>
            </MDBDropdown>
        );
    }

    renderCampaignImage = () => {
        let campaign = this.state.chosenCampaign;
        return (
            <Image 
            className="CampaignSelect-ChosenCampaign-Avatar"
            src={(campaign.avatar !== "" ? `${env.API}/${campaign.avatar}` : 'https://i.imgur.com/c26Syzn.jpg')} 
            roundedCircle 
            />
        );
    }

    renderCampaignName() {
        let campaign = this.state.chosenCampaign;
        let campaignName = campaign.name;
        if(campaign.name.split("").length > 15) {
            campaignName = "";
            for(let i = 0; i < campaign.name.split("").length; i++) {
                if(i < 15) campaignName += campaign.name.split("")[i];
            }
            campaignName += "..."
        }
        return campaignName;
    }

    renderCampaigns() {
        let Campaigns = this.state.campaignData.map((el, idx) => {
            return(
                <MDBDropdownItem key={idx} className="CampaignSelect-DropdownItem" onClick={() => this.handleChange(el)}>
                    <Image 
                    className="CampaignSelect-CampaignAvatar" 
                    src={(el.avatar ? `${env.API}/${el.avatar}` : 'https://i.imgur.com/c26Syzn.jpg')} 
                    roundedCircle 
                    />
                    <span className="CampaignSelect-Dropdown-Item-Span">{el.name}</span>
                    <span className="CampaignSelect-Dropdown-Item-Span" style={{ marginLeft: "5%", color: "rgb(204, 23, 120)" }}>
                        {parseInt(el.owner_id, 10) === this.props.userData.id ? <FontAwesomeIcon icon="shield-alt" /> : ''}
                    </span>
                </MDBDropdownItem>
            );
        });

        return(
            <MDBDropdown onChange={this.handleChange}>
            <MDBDropdownToggle caret color="elegant" size={this.props.nav ? "sm" : "lg"} className="CampaignSelect-DropDown">
                {this.state.chosenCampaign ? this.renderCampaignImage() : '' }
                {this.state.chosenCampaign ? this.renderCampaignName() : 'Select Campaign' }
            </MDBDropdownToggle>
            <MDBDropdownMenu className="CampaignSelect__DropDownMenu">
                {Campaigns}
            </MDBDropdownMenu>
            </MDBDropdown>
        );
    }

    render = () => this.state.campaignData ? this.renderCampaigns() : this.renderSpinner();
};

export default CampaignSelect;