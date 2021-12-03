import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassHello from './components/ClassHello';
import FunctionHello from './components/FunctionHello';
import NameWithProp from './components/NameWithProp';
import FunctionNameWthProps from './components/FunctionNameWithProp'
import Main from './components/Main'


ReactDOM.render(
  <React.StrictMode>
    <div>
    <ClassHello/>
    <FunctionHello />
    <NameWithProp firstName="Ahmet" lastName="Ak"/>
    <FunctionNameWthProps firstName="Ahmet" lastName="Ak"/>
    <Main>
      <ClassHello/>
      <FunctionHello />
    </Main>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
