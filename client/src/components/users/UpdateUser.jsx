import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import "./user.css";

function AddUser() {
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

  const { id } = useParams();

  useEffect(() => {
    function getUser() {
      axios
        .get(`http://localhost:5000/api/staffMembers/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getUser();
  }, []);

  //console.log(user);

  function updateData(e) {
    e.preventDefault();

    const updatedUser = user;

    axios
      .put(`http://localhost:5000/api/staffMembers/${id}`, updatedUser)
      .then(() => {
        alert("user updated");
        navigate("/users");
      })
      .catch((err) => {
        alert(err);
      });

    // setUser({
    //   fName: "",
    //   lName: "",
    //   staffId: "",
    //   faculty: "",
    //   nic: "",
    //   phoneNumber: "",
    //   email: "",
    //   password: "",
    // });
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
    <div className="formStyle">
      <h2 className="heading">Update staff member</h2>
      <form onSubmit={updateData}>
        <div class="form-group row">
          <label for="fname" class="col-sm-2 col-form-label">
            First Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="fname"
              name="fName"
              placeholder="enter first name"
              onChange={handleChange}
              value={user.fName}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="lname" class="col-sm-2 col-form-label">
            Last Name
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="lname"
              name="lName"
              placeholder="enter last name"
              onChange={handleChange}
              value={user.lName}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="staffid" class="col-sm-2 col-form-label">
            Staff ID
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staffid"
              name="staffId"
              placeholder="enter staff ID"
              onChange={handleChange}
              value={user.staffId}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="fac" class="col-sm-2 col-form-label">
            Faculty
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="fac"
              name="faculty"
              placeholder="enter faculty name"
              onChange={handleChange}
              value={user.faculty}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="NIC" class="col-sm-2 col-form-label">
            NIC
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="NIC"
              name="nic"
              placeholder="enter nic"
              onChange={handleChange}
              value={user.nic}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="phone" class="col-sm-2 col-form-label">
            Phone Number
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="phone"
              name="phoneNumber"
              placeholder="enter phone number"
              onChange={handleChange}
              value={user.phoneNumber}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="mail" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="mail"
              name="email"
              placeholder="enter email address"
              onChange={handleChange}
              value={user.email}
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="pass" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input
              type="password"
              class="form-control"
              id="pass"
              name="password"
              placeholder="enter password"
              onChange={handleChange}
              value={user.password}
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
