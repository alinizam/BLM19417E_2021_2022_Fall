import React, { Component } from 'react'
import axios from 'axios';

export default class EmployeeListComponent extends Component {
    constructor(props){
        super(props);
        this.state={employees:[]};
    }
    componentDidMount(){
       /* fetch("https://localhost:44302/api/Employees")
       .then(response=>response.json())
       .then(data=>{
            this.setState({employees:data});
            console.log(this.state.employees);
            console.log(this.state);
       }).catch(error=>{console.log(error)});*/

       axios.get("https://localhost:44302/api/Employees")
            .then(response=>{
                this.setState({employees:response.data});   
            })

    }
    render() {
        return (
            <div>
            <ul>
                {this.state.employees.map(emp=>{return <li key={emp.empId}>
                    {emp.firstName} {emp.lastName}</li>})}

            </ul>
            </div>
        )
    }
}
