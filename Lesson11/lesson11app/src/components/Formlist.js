import React, { Component } from 'react'

export default class FormList extends Component {
    constructor(props) {
        super(props);
        this.state = { newEmployee: "", employees: ["Ahmet", "Mehmet", "Ayşe"] };
        this.state = { newEmployee: "", employees: [{firstname:"",lastName:""}] };
    }

    handleChange = (event) => {
        this.setState({ newEmployee: event.target.value });
    }

    addEmployee=()=>{
        
        this.setState({employees:[...this.state.employees,this.state.newEmployee]});
        
    }
    render() {
        return (
            <div>
                <p> Form list component </p>
                <form onSubmit={(e)=>{e.preventDefault();}}>
                    <input type="text" value={this.state.newEmployee} onChange={this.handleChange} />
                    <ol>
                        {this.state.employees.map(function (item, i) {
                            return <li key={i}> {item} </li>
                        })}
                    </ol>
                    <button onClick={this.addEmployee} >Add</button>
                </form>

            </div>
        )
    }
}
