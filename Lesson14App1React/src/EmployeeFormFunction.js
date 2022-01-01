import axios from 'axios';
import React, { Component, useState } from 'react'

export default function EmployeeFormFunction () {
    const initialState = {
        employee: {
            empId: NaN,
            firstName: "",
            lastName: ""
        }
    }
    const [state, setEmployee] = useState(initialState);
    const handleChange = (evt) => {
        let { name, value } = evt.target;
        setEmployee({ employee: { ...state.employee, [name]: value } });
        console.log(state.employee);
    }

    const createEmployee = (evt) => {
        axios("https://localhost:44302/api/Employees",
            {
                method: "POST", headers: { "Context-type": "application/json" },
                data: state.employee
            })
            .then(response => console.log(response.data))
            .catch(error => {
                console.log(error);
                throw error;
            });
    }
    return (
        <div>
            <p>
                <label>Emp Id:
                    <input type="text" name="empId"

                        onChange={handleChange}>
                    </input>
                </label>
            </p>
            <p>
                <label>First Name:
                    <input type="text" name="firstName"

                        onChange={handleChange}>
                    </input>
                </label>
            </p>
            <p>
                <label>Last Name:
                    <input type="text" name="lastName"

                        onChange={handleChange}>
                    </input>
                </label>
            </p>
            <p>
                <button onClick={createEmployee}>
                    Create Employee
                </button>

            </p>
        </div>
    )

}
