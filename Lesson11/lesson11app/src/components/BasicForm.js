import React, { Component } from 'react'

export default class BasicForm extends Component {
    constructor(props){
        super(props);
        this.state={adi:""};
    }
    handleChange = (event)=>{
       this.setState({adi:event.target.value})
    }
    render() {
        return (
            <div>
                <h2>Basic Form</h2>
                <form>
                    <p>{this.state.adi} </p>
                    <input type="text" value={this.state.adi} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
}
