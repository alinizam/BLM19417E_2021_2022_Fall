import React, { Component } from 'react';
import CounterMultiState from './components/CounterMultiState';
import CounterUseContextHook from './components/CounterUseContextHook';
import CounterUseReducerHook from './components/CounterUseReducerHook';
import EmpUseContextHook from './components/EmpUseContextHook';
import EmpUseMultipleContextHook from './components/EmpUseMultipleContextHook';
import Counter from './Counter';
import store from './Store/MyStore';

class App extends Component {
     
    render() {
        return(
            <div>
                <CounterMultiState/>
                <CounterUseReducerHook/>
                <CounterUseContextHook/>
                <EmpUseContextHook/>
                <EmpUseMultipleContextHook/>
            </div>
        );
    }
}


export default App;