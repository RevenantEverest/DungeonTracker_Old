import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn
} from 'mdbreact';

import Search from '../sections/Search';
import CharacterThumbnail from '../sections/CharacterThumbnail';

const characters = [
    { 
        id: 1, 
        name: "Rakka", 
        avatar: "https://i.imgur.com/e2F0Tf1.png", 
        gender: "male",
        race: "Half-Dragon", 
        profession: "Paladin", 
        origin: "",
        description: "This is my character description for Rakka, he is a very nice guy!",
        type: "NPC"
    },
    { 
        id: 2, 
        name: "Raegan Ramoose", 
        avatar: "https://i.imgur.com/9j71Rtn.png", 
        gender: "male",
        race: "Rat", 
        profession: "Mercenary", 
        origin: "",
        description: "",
        type: "NPC"
    },
    { 
        id: 3, 
        name: "Sally the Salamancer", 
        avatar: "https://i.imgur.com/5nM5dEm.png", 
        gender: "male",
        race: "Salamander", 
        profession: "", 
        origin: "",
        description: "",
        type: "NPC"
    }
];

class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characters: characters,
            search: ''
        };
    }

    search = (search) => this.setState({ search: search });

    renderSpinner() {

    }

    renderCreateCharacter() {
        if(parseInt(this.props.manageCampaign.owner_id, 10) !== this.props.userData.id) return;

        return(
            <Row >
                <Col className="d-flex flex-row-reverse">
                    <div className="p-2">
                    <Link to='/characters/create'>
                    <MDBBtn color="unique" size="md">Create Character</MDBBtn>
                    </Link>
                    </div>
                </Col>
            </Row>
        );
    }

    renderCharacters() {
        let Characters = this.state.characters.filter(el => { return el.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 }).map((el, idx) => {
            return(
                <Col key={idx} lg={6} style={{ marginBottom: "3%" }}>
                    <CharacterThumbnail characterData={el} />
                </Col>
            );
        });

        return Characters;
    }

    render() {
        const userData = this.props.userData;
        const manageCampaign = this.props.manageCampaign;
        return(
            <div id="Characters" className="app-page">
                <Container fluid>
                <Row style={{ marginBottom: "2%" }}>
                    <Col>
                    <MDBBreadcrumb style={{ background: "#1c1c1c" }}>
                        <MDBBreadcrumbItem><Link to="/">Home</Link></MDBBreadcrumbItem>
                        <MDBBreadcrumbItem active>Characters</MDBBreadcrumbItem>
                    </MDBBreadcrumb>
                    </Col>
                </Row>
                {!manageCampaign ? this.renderSpinner() : this.renderCreateCharacter()}
                <Row style={{ marginBottom: "3%" }}>
                    <Col>
                    {manageCampaign ? <Search manageCampaign={manageCampaign} search={this.search} /> : ''}
                    </Col>
                </Row>
                <Row>
                    {manageCampaign ? this.renderCharacters() : ''}
                </Row>
                </Container>
            </div>
        );
    }
};

export default Characters;