import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function Students() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function getUsers() {
      axios
        .get("http://localhost:5000/api/students")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUsers();
  }, []);

  function deleteUser(_id) {
    axios
      .delete("http://localhost:5000/api/students/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("user deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setUsers(users.filter((user) => user._id !== _id));
  }

  return (
    <div className="all">
      <h2 className="heading">All Students Details</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Student ID</th>
            <th scope="col">Faculty</th>
            <th scope="col">NIC</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-light">
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.fName}</td>
                <td>{user.lName}</td>
                <td>{user.studentId}</td>
                <td>{user.faculty}</td>
                <td>{user.nic}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/updateStudent/${user._id}`}
                  >
                    <EditIcon /> Update
                  </a>
                  &nbsp;&nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this record?"
                        )
                      )
                        deleteUser(user._id);
                    }}
                  >
                    <DeleteForeverIcon /> Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
