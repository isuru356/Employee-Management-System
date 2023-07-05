import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const DeleteEmployee = () => {
  const [empNo, setEmpNo] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();

    const endpoint = `/api/v1.0/Employee/${empNo}`;

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(endpoint)
          .then((response) => {
            swal(
              "Success!",
              "Employee record deleted successfully!",
              "success"
            );
            setEmpNo("");
          })
          .catch((error) => {
            swal("Oops!", error.response.data.statusDescription, "error");
            setEmpNo("");
          });
      } else {
        swal("Your Employee record is safe!");
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (empNo) {
      handleDelete(e);
    } else {
      setInvalidInput(true);
      swal("Oops!", "Enter Employee Number", "error");
    }
  };

  const clearData = (e) => {
    e.preventDefault();
    setEmpNo("");
  };

  return (
    <div className="app">
      <form id="delteEmp">
        <input
          type="text"
          value={empNo}
          onChange={(e) => setEmpNo(e.target.value)}
          placeholder="Enter Employee Number"
        />
        <button onClick={handleClick}>Delete</button>
        <br />
        <button onClick={clearData}>Clear</button>
      </form>
    </div>
  );
};

export default DeleteEmployee;
