import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

function StudentLogin() {
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState({
    studentId: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/students/validate", user)
      .then((res) => {
        if (res.status === 200) {
          alert("user validated");
          setValid(res.data);

          navigate("/continueStudent");
        }
      })
      .catch((err) => {
        alert("Login details are invalid, Please try again!!!");

        setValid(false);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUser((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="loginForm">
          <h1>Student Login</h1>

          <div className="row">
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={sendData}>
                    <div className="form-group">
                      <label for="id">Student Id</label>
                      <input
                        type="text"
                        className="form-control"
                        name="studentId"
                        value={user.studentId}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-dark">
                      Login
                    </button>
                  </form>
                  <br />
                  <br />

                  <div>
                    <label for="password">
                      If you don't have an account click to
                    </label>
                    &nbsp;&nbsp;
                    <a href="/addStudent">Register</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
