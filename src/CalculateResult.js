import React, { Component } from 'react'
import './CalculateResult.css'

class CalculateResult extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="CalculateResult">
                <div className="CalculateResult-history">
                    {this.props.history.map((el, idx) => <p key={idx}>{el}</p>)}
                </div>
                <div className="CalculateResult-result">{this.props.result}</div>
            </div>
        )
    }
}

export default CalculateResult;