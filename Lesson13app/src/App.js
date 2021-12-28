import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './reducers/PersonelStore';

import './App.css';
import Counter from './Counter';
import PersonelList from './PersonelList';
import PersonelForm from './PersonelForm';


class App extends Component {
  render() {
     return (
      <Provider store={store}>
      <div>
        <PersonelForm/>
        <h1>-----------------</h1>
        <PersonelList/>

      </div>
      </Provider>
    )

  };

}

export default App;
