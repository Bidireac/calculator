import React, { Component } from 'react'
import NumberBtn from './NumberBtn'
import OperationBtn from './OperationBtn'
import CalculateResult from './CalculateResult'
import './Calculator.css'

class Calculator extends Component {
    static defaultProps = {
        calculatorNumbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0'],
        calculatorOperations: ['/', 'x', '-', '+']
    }
    constructor(props) {
        super(props);
        this.state = {firstParameter: '', secondParameter: '', operation: '', result: '', history: []};
        this.addParameter = this.addParameter.bind(this);
        this.addOperation = this.addOperation.bind(this);
        this.calculateResult = this.calculateResult.bind(this);
        this.handleResult = this.handleResult.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleClear() {
        this.setState({
            firstParameter: '', 
            secondParameter: '', 
            operation: '', 
            result: '',
            history: []
        })
        this.props.history.replace({ pathname: '/', state:{isActive: true}});
    }
    handleDelete() {
        let resultLength = this.state.result.toString().split('');
        let firstParam = this.state.firstParameter.toString().split('');
        let newResult = resultLength.filter((el, idx) => idx < resultLength.length - 1).join('');
        let newParam = firstParam.filter((el, idx) => idx < firstParam.length - 1).join('');
        this.setState({
            firstParameter: newParam,
            result: newResult
        })
    }
    handleResult() {
        let first = this.state.firstParameter;
        let second = this.state.secondParameter;
        if(first && second) {
            this.calculateResult(this.state.operation);
        }
    }
    calculateResult(operation) {
        let first = parseFloat(this.state.firstParameter);
        let second = parseFloat(this.state.secondParameter);
        let result;
        switch (operation) {
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "/":
                result = first / second;
                break;
            case "x":
                result = first * second;
                break;
        }
        this.props.history.push(`${result}`);
        this.setState({
            result: result,
            firstParameter: result,
            secondParameter: ''
        });
    }
    addOperation(operation) {
        let location = this.props.location.pathname;
        let firstUrl = `${this.state.firstParameter}/`;
        let secondUrl = `${firstUrl}/${this.state.secondParameter}`;
        let changeUrl = location === "/" ? firstUrl : secondUrl;
        let urlCheck = location.split('/').length;
        if (urlCheck <= 2) {
            this.props.history.push(changeUrl);
            this.setState({
                history: [...this.state.history, operation],
                operation
            });
        } else if (urlCheck === 3) {
            this.setState({
                history: [...this.state.history, operation],
                operation
            });
            this.handleResult();
        }
    }
    addParameter(number) {
        this.props.location.pathname === "/"
            ? this.setState({
                firstParameter: this.state.firstParameter+number,
                history: [...this.state.history, number]
            })
            : this.setState({
                secondParameter: this.state.secondParameter+number,
                history: [...this.state.history, number]
            });
    }
    render() {
        let calcNumbers = this.props.calculatorNumbers.map(
            number => <NumberBtn 
                key={number} 
                number={number} 
                addParameter={this.addParameter}
            />)
        let calcOperations = this.props.calculatorOperations.map(
            operation => <OperationBtn 
                key={operation} 
                operation={operation} 
                addOperation={this.addOperation} 
            />)
        return (
            <div className="Calculator">
                <CalculateResult 
                    {...this.props} 
                    history={this.state.history}
                    result={this.state.result}
                />
                <div className="Calculator-buttons">
                    {calcNumbers}
                    {calcOperations}
                    <button onClick={this.handleClear} className="OperationBtn">
                        CE
                    </button>
                    <button onClick={this.handleDelete} className="OperationBtn">
                        DEL
                    </button>
                    <button onClick={this.handleResult} className="OperationBtn">
                        =
                    </button>
                </div>
            </div>
        )
    }
}

export default Calculator;
