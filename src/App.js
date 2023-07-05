import "./App.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Departments from "./Pages/Departments";
import AddEmployee from "./Pages/AddEmployee";
import UpdateEmployee from "./Pages/UpdateEmployee";
import DeleteEmployee from "./Pages/DeleteEmployee";
import Employee from "./Pages/Employee";
import Employees from "./Pages/Employees";

function App() {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" exact Component={Home} />
        <Route path="/departmens" exact Component={Departments} />
        <Route path="/add-employee" exact Component={AddEmployee} />
        <Route path="/update-employee" exact Component={UpdateEmployee} />
        <Route path="/delete-employee" exact Component={DeleteEmployee} />
        <Route path="/employee" exact Component={Employee} />
        <Route path="/employees" exact Component={Employees} />
      </Routes>
    </Router>
  );
}

export default App;
