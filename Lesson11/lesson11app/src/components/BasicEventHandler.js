import React, { Component } from 'react'

export default class BasicEventHandler extends Component {
    constructor(props){
        super(props);
       //this.displayContext=this.displayContext.bind(this);
    }
    //displayContext(){
    //    alert(this);
    //}
    displayContext=()=>{
        alert(this);
    }
    render() {
        return (
            <div>
                <button onClick={this.displayContext} >Display Context</button>
                <button onClick={(e)=>{alert(e.currentTarget)}} >Display Lambda Context</button>
            </div>
        )
    }
}
