import React, { useState } from 'react'

export default function MultipleComponentFormFunctionHook() {

    const initialState = {
        employees: [{ firstName: "Ad", lastName: "Soyad" }],
        newEmp:{
            
        },

    }

    const [state, addNew] = useState(initialState);
    
    return (
        <div>
            <h3>List w Hook</h3>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={(e) => addNew({ ...state, newEmp:{...state.newEmp,firstName: e.target.value} })} />
                <input type="text" onChange={(e) => addNew({ ...state, newEmp:{...state.newEmp,lastName: e.target.value} })} />
                <button onClick={() => addNew({
                    ...state,employees: [...state.employees, state.newEmp]
                })}>Add</button>

            </form>
            {state.employees.map(function (item, i) {
                return <li key={i}>{item.firstName} {item.lastName}</li>
            })}

        </div>
    )
}


