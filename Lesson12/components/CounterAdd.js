import React, { useContext,useReducer } from 'react'
import { NumberContext } from './MyContext'
const reducer=(state,action)=>{
    switch(action){
        case "ADD":
            return {...state,count:state.count+1}
        case "MINUS":
            return {...state,count:state.count-1}
        default:
            return state
    }

}

export default function CounterAdd() {
    const mystate=useContext(NumberContext)
    const [state, dispatch] = useReducer(reducer, mystate);

    return (
        <div>
            <h3>Context + Reducer</h3>
            <h3>{mystate.count}</h3>
            

            <button onClick={()=>{
                dispatch("ADD");
            }}>Add</button>
            <button onClick={()=>{
                dispatch("MINUS");
            }}>Minus</button>
        </div>
    )
}

