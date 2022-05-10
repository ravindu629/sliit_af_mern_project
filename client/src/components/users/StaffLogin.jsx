import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";
import Button from "@mui/material/Button";

function StaffLogin() {
  const [valid, setValid] = useState(false);
  const [sup, setSup] = useState(true);
  const [panel, setPanel] = useState(false);
  const [user, setUser] = useState({
    staffId: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/staffMembers/validate", user)
      .then((res) => {
        if (res.status === 200) {
          alert("user validated");
          setValid(res.data);

          navigate("/continueStaff");
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

  function setSupervisor() {
    setSup(true);
    setPanel(false);
  }

  function setPanelMember() {
    setSup(false);
    setPanel(true);
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="loginBtn">
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={setSupervisor}
          >
            Supervisor Login
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={setPanelMember}
          >
            Panel Member Login
          </Button>
        </div>
        <div className="loginForm">
          <h1>{sup ? "Supervisor" : "Panel Member"} Login</h1>

          <div className="row">
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={sendData}>
                    <div className="form-group">
                      <label for="id">Staff Id</label>
                      <input
                        type="text"
                        className="form-control"
                        name="staffId"
                        value={user.staffId}
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
                    <a href="/addStaffMember">Register</a>
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

export default StaffLogin;
