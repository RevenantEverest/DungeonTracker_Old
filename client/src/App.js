import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div id="App">
            <Router>
                <div>
                </div>
            </Router>
            </div>
        );
    }
};

export default App;