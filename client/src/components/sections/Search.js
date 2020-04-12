import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { 
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBFormInline,
    MDBInput,
    MDBSelect,
    MDBSelectInput,
    MDBSelectOption,
    MDBSelectOptions
} from 'mdbreact';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: [
                {
                    text: "Option nr 1",
                    value: "1"
                },
                {
                    text: "Option nr 2",
                    value: "2"
                },
                {
                    text: "Option nr 3",
                    value: "3"
                }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => this.props.search(e.target.value);

    render() {
        return(
            <div className="Search">
                <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Row>
                    <Col>
                        <MDBCard style={{ background: "#1c1c1c" }}>
                        <MDBCardBody>
                        <Row>
                            <Col>
                            <MDBFormInline className="md-form">
                                <MDBIcon icon="search" />
                                <input 
                                className="form-control form-control-sm ml-3 w-75"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                name="search"
                                onChange={this.handleChange}
                                />
                            </MDBFormInline>
                            </Col>
                        </Row>
                        </MDBCardBody>
                        </MDBCard>
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default Search;