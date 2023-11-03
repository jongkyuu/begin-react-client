import React, { Component } from "react";

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0,
    //     };
    //     // this.handleIncrease = this.handleIncrease.bind(this);
    //     // this.handleDecrease = this.handleDecrease.bind(this);
    // }

    // CRA로 만든 프로젝트에서는 보통 아래와 같이 작성함
    state = {
        counter: 0,
        fixed: 1,
    };

    handleIncrease = () => {
        console.log(this);
        console.log("increase");
        this.setState((state) => ({
            counter: state.counter + 1,
        }));
    };

    handleDecrease = () => {
        console.log("decrease");
        this.setState((state) => ({
            counter: state.counter - 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값 : {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter;
