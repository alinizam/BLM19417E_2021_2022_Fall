import React, { Component } from 'react'

export default class NameWithProp extends Component {
    constructor(props){
        super(props);
    }
   
    render() {
        
        return (
            <div>
                <h1>FirstName equals {this.props.firstName}</h1>   
                <h1>LastName equals {this.props.lastName}</h1>  
            </div>
        )
    }
}
