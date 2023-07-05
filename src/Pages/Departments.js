import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = () => {
    axios
      .get("/api/v1.0/Departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        swal("Oops!", "An error occurred!", "error");
      });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department, index) => (
            <tr key={index}>
              <td>{department.departmentCode}</td>
              <td>{department.departmentName}</td>
              <td>{department.isActive.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Departments;
