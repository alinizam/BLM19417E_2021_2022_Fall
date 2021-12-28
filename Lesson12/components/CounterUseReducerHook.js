import React,{useReducer} from 'react'
import DisplayHistory from './DisplayHistory'

const initialState={
    currentValue:0,
    isClicked:false,
    preState:[]
}

const reducer=(state,action)=>{
    switch(action){
        case "ADD":
            return {...state,currentValue:state.currentValue+1,isClicked:true,preState:[...state.preState,{act:"ADD",prevValue:state.currentValue}]}
        case "MINUS":
            return {...state,currentValue:state.currentValue-1,isClicked:true,preState:[...state.preState,{act:"MINUS",prevValue:state.currentValue}]}
        default:
            return state
    }

}

function CounterUseReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Reducer</h3>
            <h3>{state.currentValue}</h3>
            <h3>{""+state.isClicked}</h3>
            
            <DisplayHistory preState={state.preState}/>


            <button onClick={()=>{
                dispatch("ADD");
                
            }}>Add</button>
            <button onClick={()=>{
                dispatch("MINUS");
            }}>Minus</button>
        </div>
    )
}

export default CounterUseReducerHook
