import * as React from "react";
import { Component } from 'react';

export default class Cell extends Component {
    render() {
        const { value, isWin, id} = this.props;
        const styles = {
            "animationDelay": (isWin ? id * 0.05 : 0) + 's'
        };
        const classes = ["board__cell"];

        if (value === null) classes.push("board__cell--empty");
        if (isWin) classes.push("board__cell--scale");

        return (
           <div className={classes.join(" ")} style={styles}>{value}</div>
        );
    }
}