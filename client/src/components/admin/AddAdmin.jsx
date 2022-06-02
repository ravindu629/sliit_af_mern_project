import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import AddIcon from "@mui/icons-material/Add";

function AddAdmin() {
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    adminId: "",
    nic: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/admins", user)
      .then(() => {
        alert("admin added");
        setValid(true);
        navigate("/adminMenu");
      })
      .catch((err) => {
        alert(err);
      });

    setUser({
      fName: "",
      lName: "",
      adminId: "",
      nic: "",
      phoneNumber: "",
      email: "",
      password: "",
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
    <div className="container">
      <div className="formStyle">
        <h2 className="heading">Register Admin</h2>
        <form onSubmit={sendData}>
          <div className="form-group row">
            <label for="fname" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fname"
                name="fName"
                placeholder="enter first name"
                onChange={handleChange}
                value={user.fName}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="lname" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="lname"
                name="lName"
                placeholder="enter last name"
                onChange={handleChange}
                value={user.lName}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="stdid" className="col-sm-2 col-form-label">
              Admin Id
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="admid"
                name="adminId"
                placeholder="enter admin id"
                onChange={handleChange}
                value={user.adminId}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="NIC" className="col-sm-2 col-form-label">
              NIC
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="NIC"
                name="nic"
                placeholder="enter nic"
                onChange={handleChange}
                value={user.nic}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="phone" className="col-sm-2 col-form-label">
              Contact No
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phoneNumber"
                placeholder="enter phone number"
                onChange={handleChange}
                value={user.phoneNumber}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="mail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="mail"
                name="email"
                placeholder="enter email address"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="pass" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="pass"
                name="password"
                placeholder="enter password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                <AddIcon />
                &nbsp;&nbsp; Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdmin;
