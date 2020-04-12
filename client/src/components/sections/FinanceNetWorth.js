import React, { Component } from 'react';

class FinanceNetWorth extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
        this.getPartyInventory();
    }

    componentWillUnmount = () => this._isMounted = false;

    getPartyInventory() {
        if(!this._isMounted) return;
    }

    getPartyAssets() {
        if(!this._isMounted) return;
    }

    getPartyCurrency() {
        if(!this._isMounted) return;
    }

    render() {
        return(
            <div id="FinanceNetWorth">
            </div>
        );
    }
};

export default FinanceNetWorth;