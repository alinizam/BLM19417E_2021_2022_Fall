import React, {useState} from 'react'

export default function LabWithHook() {
    const initialState = {name: "",addList:[]}
    const[state, addText] = useState(initialState);
    
    return (
        <div>
            <input type="text" value={state.name} onChange={(e)=>addText({...state,name:e.target.value})}></input>
            <button onClick={()=>addText({addList: [...state.addList, state.name]})}> Add</button>
            <ol>
            <h2>{typeof(state.addList)}</h2>
            <h2>{state.addList.map(function(item,index){
                return <li key={index}> {item} </li>;
            })}</h2>
            </ol>
        </div>
    )
}
