import React,{useState} from 'react'

function CounterMultiState() {
    const initialState={
        currentValue:0
    }
    const [count,setCount]=useState(initialState);
    const initialButtonState={
        initialValue:false
    }
    const [isClicked,setClicked]=useState(initialButtonState);
    return (
        <div>
            <h3>Multi State</h3>
            <h3>{count.currentValue}</h3>
            <h3>{""+isClicked.initialValue}</h3>
            <button onClick={()=>{
                setCount({currentValue:count.currentValue+1});
                setClicked({initialValue:true})
            }}>Add</button>
            <button onClick={()=>{
                setCount({currentValue:count.currentValue-1});
                setClicked({initialValue:true})
            }}>Minus</button>
        </div>
    )
}

export default CounterMultiState
