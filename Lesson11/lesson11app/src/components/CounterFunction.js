import React, {useState} from 'react'

export default function CounterFunction() {
    const initialState={currentValue:0};
    const[count, setCount]=useState(initialState);

    return (
        <div>
            <h2>Counter Function</h2>
            <h3>{count.currentValue}</h3>
            <button onClick={()=>setCount({currentValue:count.currentValue+1})}>Inc</button> 
            <button onClick={()=>setCount({currentValue:count.currentValue-1})}>Decr</button> 
        </div>
    )
}
