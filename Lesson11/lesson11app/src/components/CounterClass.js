import React, { Component } from 'react'

export default class CounterClass extends Component {
    constructor(props){
        super(props);
        this.state={count:0}
    }
    inc=()=>{
        this.setState({count:this.state.count+1});
    };

    inc1 = () => {
        this.setState(x => { return {count: x.count + 1}});
    }

    decr=()=>{
        this.setState({count:this.state.count-1});
    };
    render() {
        return (
            <div>
                <h2>Counter class</h2>                
                <h3>{this.state.count}</h3>
                <button onClick={this.inc1}>+</button>
                <button onClick={this.decr}>-</button>
            </div>
        )
    }
}
