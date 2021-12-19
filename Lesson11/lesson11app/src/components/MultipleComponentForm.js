import React, { Component } from 'react'

export default class MultipleComponentForm extends Component {
    constructor(props) {
        super(props);
        this.state = { newEmployee: { firstname: "", lastName: "" }, 
                       employees: [{ firstname: "", lastName: "" }] };
    }

    handleChangeFN = (event) => {
        this.setState({ newEmployee: {...this.state.newEmployee, firstname:event.target.value }});
    }
    handleChangeLN = (event) => {
        this.setState({ newEmployee: {...this.state.newEmployee, lastName:event.target.value }});
    }
    addEmployee = () => {

        this.setState({ employees: [...this.state.employees, this.state.newEmployee] });

    }
    render() {
        return (
            <div>
                <p> Form list component </p>
                <form onSubmit={(e) => { e.preventDefault(); }}>
                    <input type="text" value={this.state.newEmployee.firstname} onChange={this.handleChangeFN} />
                    <input type="text" value={this.state.newEmployee.lastName} onChange={this.handleChangeLN} />
                    <ol>
                        {this.state.employees.map(function (item, i) {
                            return <li key={i}> {item.firstname} {item.lastName}</li>
                        })}
                    </ol>
                    <button onClick={this.addEmployee} >Add</button>
                </form>

            </div>
        )
    }
}
