import './App.css';
import BasicEventHandler from './components/BasicEventHandler';
import BasicForm from './components/BasicForm';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import FormList from './components/Formlist';
import ListComponent from './components/ListComponent';
import MultipleComponentForm from './components/MultipleComponentForm';
import MultipleComponentFormFunctionHook from './components/MultipleComponentFormFunctionHook';
function App() {
  return (
    <div className="App">
      <BasicEventHandler/>
      <CounterClass/>
      <CounterFunction/>
      <BasicForm/>
      <ListComponent/>
      <FormList/>
      <MultipleComponentForm/>
      <MultipleComponentFormFunctionHook/>
    </div>
  );
}

export default App;
