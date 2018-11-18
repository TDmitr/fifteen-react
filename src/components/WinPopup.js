import * as React from "react";
import { Component } from 'react';

export default class WinPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
           show: false
        };
    }
    componentDidMount() {
        setTimeout(() => this.setState({show: true}), 1400);
    }
    render() {
        const classes = ['win'];
        if(this.state.show) classes.push('win--show');

        return (
            <div className={classes.join(" ")}>
                <div className="win__modal">
                    <h1>Congratulations!</h1>
                    <h2>You WIN</h2>
                    <button onClick={this.props.handleNewGame}>NEW GAME</button>
                </div>
            </div>
        );
    }
}