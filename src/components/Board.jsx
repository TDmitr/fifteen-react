import * as React from "react";
import { Component } from 'react';
import Cell from "./Cell";

export default class Board extends Component {
    render() {
        return (
           <div className="board__field">
               {this.props.numbers.map((e, i) => <Cell value={e} key={i} id={i} isWin={this.props.isWin}/>)}
           </div>
        );
    }
}