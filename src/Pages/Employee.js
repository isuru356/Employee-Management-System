import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Employee = () => {
  const [employee, setEmployee] = useState(null);
  const [empNo, setEmpNo] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleInputChange = (event) => {
    setEmpNo(event.target.value);
  };

  const getEmployee = () => {
    axios
      .get(`/api/v1.0/Employee/${empNo}`)
      .then((response) => {
        if (response.data.empNo === null) {
          swal("Oops!", "Record not found!", "error");
        } else {
          const existingEmployee = response.data;
          setEmployee(existingEmployee);
        }
      })
      .catch((error) => {
        swal("Oops!", "An error occurred!", "error");
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (empNo) {
      getEmployee();
    } else {
      setInvalidInput(true);
      swal("Oops!", "Enter Employee Number", "error");
    }
  };

  const clearData = (e) => {
    e.preventDefault();
    setEmpNo("");
  };

  const handleClose = () => {
    setEmployee(null);
    setEmpNo("");
  };

  return (
    <div className="app">
      <form id="singleEmp">
        <input
          type="text"
          value={empNo}
          onChange={handleInputChange}
          placeholder="Enter Employee Number"
        />
        <button onClick={handleClick}>Retrieve</button>
        <br />
        <button onClick={clearData}>Clear</button>
      </form>

      {employee && (
        <div>
          <table>
            <tbody>
              <tr>
                <th>Emp.No:</th>
                <td>{employee.empNo}</td>
              </tr>
              <tr>
                <th>Emp.Name:</th>
                <td>{employee.empName}</td>
              </tr>
              <tr>
                <th>Emp.Add.Line 1:</th>
                <td>{employee.empAddressLine1}</td>
              </tr>
              <tr>
                <th>Emp.Add.Line 2:</th>
                <td>{employee.empAddressLine2}</td>
              </tr>
              <tr>
                <th>Emp.Add.Line 3:</th>
                <td>{employee.empAddressLine3}</td>
              </tr>
              <tr>
                <th>Department Code:</th>
                <td>{employee.departmentCode}</td>
              </tr>
              <tr>
                <th>Date Of Join:</th>
                <td>{employee.dateOfJoin}</td>
              </tr>
              <tr>
                <th>Date Of Birth:</th>
                <td>{employee.dateOfBirth}</td>
              </tr>
              <tr>
                <th>Basic Salary:</th>
                <td>{employee.basicSalary}</td>
              </tr>
              <tr>
                <th>Active Status:</th>
                <td>{employee.isActive ? "Active" : "Inactive"}</td>
              </tr>
              <button onClick={handleClose} className="close-button">
                Close
              </button>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Employee;
