import React, { Component } from 'react';

export default function Cell(props) {
    const { value, isWin } = props;
    const classes = ["board__cell"];

    if (value === null) classes.push("board__cell--empty");
    if (isWin) classes.push("board__cell--scale");

    return <div className={classes.join(" ")}>{value}</div>;
}