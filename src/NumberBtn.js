import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NumberBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.addParameter(this.props.number);
    }
    render() {
        return (
            <button onClick={this.handleClick} className="NumberBtn">
                {this.props.number}
            </button>
        )
    }
}

export default NumberBtn;
