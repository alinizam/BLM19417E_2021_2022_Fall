import axios from 'axios';
import React, { Component } from 'react'

export default class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                empId: NaN,
                firstName: "",
                lastName: ""
            }
        }
    }
    handleChange = (evt) => {
        let { name, value } = evt.target;
        this.setState({ employee: { ...this.state.employee, [name]: value } });
        console.log(this.state);
    }

    createEmployee = (evt) => {
        axios("https://localhost:44302/api/Employees",
            { method: "POST", headers: { "Context-type": "application/json" },
            data: this.state.employee})
            .then(response => console.log(response.data))
            .catch(error=>{
                console.log(error);
                throw error;
            });
    }
    render() {
        return (
            <div>
                <p>
                    <label>Emp Id:
                        <input type="text" name="empId"

                            onChange={this.handleChange}>
                        </input>
                    </label>
                </p>
                <p>
                    <label>First Name:
                        <input type="text" name="firstName"

                            onChange={this.handleChange}>
                        </input>
                    </label>
                </p>
                <p>
                    <label>Last Name:
                        <input type="text" name="lastName"

                            onChange={this.handleChange}>
                        </input>
                    </label>
                </p>
                <p>
                    <button onClick={this.createEmployee}>
                        Create Employee
                    </button>

                </p>
            </div>
        )
    }
}
