import React, { Component } from 'react'

export default class ListComponent extends Component {
    constructor(props){
        super(props);
      //  this.state={isimler:["Ahmet","Mehmet","Ayşe"]};
        this.state=["Ahmet","Mehmet","Ayşe"];
    }
    render() {
        return (
            <div>
                <p> list component </p>
                <ol>
                    {
                    //this.state.isimler.map(function(item,i){
                    //   return <li key={i}> {item} </li> 
                    //})
                    }
                    {this.state.map(function(item,i){
                        return <li key={i}> {item} </li> 
                    })}
                </ol>   
            </div>
        )
    }
}
