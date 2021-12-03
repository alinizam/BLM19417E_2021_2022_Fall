import React, { Component } from 'react'

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const childDisplay= React.Children.map(this.props.children, chield=>{
            return(<div>Sub component content {chield}</div>)
        
        })

        return (
            <div>
                <p> ---------------------- </p>
                {childDisplay}
                <h1>This component has {React.Children.count(this.props.children)} children</h1>
                <p> ---------------------- </p>
            </div>
        )
    }
}
