import React, { Component } from 'react'

class OperationBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.addOperation(this.props.operation);
    }
    render() {
        return (
            <button onClick={this.handleClick} className="OperationBtn" name={this.props.operation}>
                {this.props.operation}
            </button>
        )
    }
}

export default OperationBtn;
