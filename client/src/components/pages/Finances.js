import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

class Finances extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    // Current Party Worth [FinanceNetWorth]
    // Current Rations
    // Party Size
    // Monthly Payments [FinanceExpenses]
    // Gross Income
    // Net Income
    // Budget 
    // Finance Logs [FinanceLogs]
    // Pay Bills Button

    render() {
        return(
            <div id="Finances" className="app-page">
            </div>
        );
    }
};

export default Finances;