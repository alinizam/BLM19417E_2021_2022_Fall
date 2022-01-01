import logo from './logo.svg';
import './App.css';
import EmployeeListComponent from './EmployeeListComponent';
import EmployeeForm from './EmployeeForm';
import EmployeeFormFunction from './EmployeeFormFunction';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListComponent />} />
          <Route path="/FormComponent" element={<EmployeeForm />} />
          <Route path="/FormFunction" element={<EmployeeFormFunction />} />
        </Routes>
        <Link to="/">EmployeeList</Link>
        <p />
        <Link to="/FormComponent">Form Component</Link>
        <p />
        <Link to="/FormFunction">Form Function</Link>
      </BrowserRouter>


    </div>
  );
}

export default App;
