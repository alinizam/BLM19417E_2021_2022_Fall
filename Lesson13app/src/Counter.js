import React, { Component } from 'react';
import {connect} from "react-redux";

class Counter extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.localState.counter} </h2>
                <button onClick={this.props.inc}>Inc</button>
                <button onClick={this.props.decr}>Decr</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        localState:state
    }
}

const mapDispatchToProp=(dispatch)=>{
    return{
        inc: ()=>{dispatch({type:"ADD"})},
        decr: ()=>{dispatch({type:"MINUS"})}
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Counter)
