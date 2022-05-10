import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./user.css";

function AddStaffMember() {
  const [valid, setValid] = useState(false);
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    staffId: "",
    faculty: "",
    nic: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/staffMembers", user)
      .then(() => {
        alert("staff member added");
        setValid(true);
        navigate("/staffLogin");
      })
      .catch((err) => {
        alert(err);
      });

    setUser({
      fName: "",
      lName: "",
      staffId: "",
      faculty: "",
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
    <div>
      <div className="formStyle">
        <h2 className="heading">Register Staff Member</h2>
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
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="staffid" className="col-sm-2 col-form-label">
              Staff Id
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="staffid"
                name="staffId"
                placeholder="enter staff id"
                onChange={handleChange}
                value={user.staffId}
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="fac" className="col-sm-2 col-form-label">
              Faculty
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fac"
                name="faculty"
                placeholder="enter faculty name"
                onChange={handleChange}
                value={user.faculty}
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
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStaffMember;
