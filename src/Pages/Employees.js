import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = () => {
    axios
      .get("/api/v1.0/Employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        swal("Oops!", "An error occurred!", "error");
      });
  };

  const indexOfLastEmployee = currentPage * employeesPerPage;

  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;

  const currentEmployees = employees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(employees.length / employeesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Employee No:</th>
            <th>Employee Name:</th>
            <th>Address Line 1:</th>
            <th>Address Line 2:</th>
            <th>Address Line 3:</th>
            <th>Department Code:</th>
            <th>Date of Join:</th>
            <th>Date of Birth:</th>
            <th>Basic Salary:</th>
            <th>Active Status:</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.empNo}</td>
              <td>{employee.empName}</td>
              <td>{employee.empAddressLine1}</td>
              <td>{employee.empAddressLine2}</td>
              <td>{employee.empAddressLine3}</td>
              <td>{employee.departmentCode}</td>
              <td>{employee.dateOfJoin}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.basicSalary}</td>
              <td>{employee.isActive.toString()}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="10">
              <button
                className="btnPagePre"
                onClick={previousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                className="btnPageNext"
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(employees.length / employeesPerPage)
                }
              >
                Next
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Employees;
