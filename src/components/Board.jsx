import React from 'react';
import Cell from "./Cell";
import shortid from 'shortid'

export default function Board(props) {
    return (
       <div className="board__field">
           {props.numbers.map(e => <Cell value={e} key={shortid.generate()} isWin={props.isWin}/>)}
       </div>
    );
}