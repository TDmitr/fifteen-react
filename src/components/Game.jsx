import * as React from "react";
import { Component } from 'react';
import * as logo from '../../assets/img/logo.svg';
import Board from "./Board";
import WinPopup from "./WinPopup";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [...new Array(16).keys()].slice(1),
            currEmptyIndex: 15,
            isWin: false
        };
    }

    componentDidMount() {
        this.shuffle();
        document.addEventListener('keydown', this.handleKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyUp);
    }

    handleKeyUp = key => {
        switch (key.keyCode) {
            case 37:
                this.moveLeft();
                break;
            case 38:
                this.moveUp();
                break;
            case 39:
                this.moveRight();
                break;
            case 40:
                this.moveDown();
                break;
        }
    };

    moveUp() {
        this.move(this.state.currEmptyIndex + 4);
    }

    moveDown() {
        this.move(this.state.currEmptyIndex - 4);
    }

    moveLeft() {
        const nextIndex = this.state.currEmptyIndex + 1;
        if(nextIndex % 4 !== 0) {
            this.move(nextIndex);
        }
    }

    moveRight() {
        const {currEmptyIndex} = this.state;
        if(currEmptyIndex % 4 !== 0) {
           this.move(currEmptyIndex - 1);
        }
    }

    move(newIndex) {
        const {numbers, currEmptyIndex} = this.state;
        if(numbers[newIndex]) {
            let numbersCopy = numbers.slice(0);
            numbersCopy[currEmptyIndex] = numbers[newIndex];
            numbersCopy[newIndex] = numbers[currEmptyIndex];

            this.setState({
                numbers: numbersCopy,
                currEmptyIndex: newIndex,
            });

            this.setState({
                isWin: this.checkWin()
            });
        }
    }

    checkWin() {
        const {numbers, currEmptyIndex} = this.state;
        let numbersCopy = numbers.slice(0);
        numbersCopy[currEmptyIndex] = 16;

        return numbersCopy.reduce((prev, curr) => {
            return {
                isSorted: prev.isSorted && prev.elem < curr,
                elem: curr
            }
        }, {isSorted: true, elem: 0}).isSorted;
    }

    shuffle = () => {
        const numbers = this.state.numbers.filter(e => e !== null).sort(() => Math.random() - 0.5);
        this.setState({
            numbers: [...numbers, null],
            currEmptyIndex: 15,
            isWin: false
        });
    };

    render() {
        const { numbers, isWin } = this.state;
        return (
           <div className="board">
               <button className="board__shuffle" onClick={this.shuffle}>Shuffle</button>
               <div className="board__title"><img src={logo}/></div>

               <Board numbers={numbers} isWin={isWin}/>

               {isWin ? <WinPopup handleNewGame={this.shuffle}/> : null}
           </div>
        );
    }
}