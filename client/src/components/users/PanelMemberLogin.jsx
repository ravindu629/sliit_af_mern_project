import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

function PanelMemberLogin(props) {
  const [valid, setValid] = useState(false);
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

          navigate("/panelMenu");
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
        <div className="">
          <h1>{props.title} Login</h1>
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
                        required
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
                        required
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

export default PanelMemberLogin;
