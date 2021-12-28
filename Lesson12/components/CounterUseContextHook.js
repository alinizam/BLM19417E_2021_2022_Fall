import React from 'react'
import { NumberContext } from './MyContext';
const initialState={
    name:"furkan",
    age:21,
    count:10,
}


export default function CounterUseContextHook() {
    //just value passing demonstrated
    const initialState={count:0};
    return (
        <NumberContext.Provider value={15}>
            
            <CounterAdd/>
            
        </NumberContext.Provider>
    )
}


function CounterAdd() {
    
    return (
        <NumberContext.Consumer>
            {value=><h2> {value}</h2>}
        </NumberContext.Consumer>
    )
}




