import * as React from "react";
import { Component } from 'react';
import '../styles/app.scss';
import Game from "./Game";

export default class App extends Component {
    render() {
        return (
          <Game/>
        );
    }
}