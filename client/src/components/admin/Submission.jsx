import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import "../App.css";
import AllSubmissions from "./AllSubmissions";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Submission() {
  const [submission, setSubmission] = useState({
    faculty: "",
    dueDate: "",
    gradingStatus: "",
  });

  const [valid, setValid] = useState(true);

  function loadAllSubs() {
    setValid(true);
  }

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/submissions", submission)
      .then(() => {
        alert("submission added");
        setValid(true);
      })
      .catch((err) => {
        alert(err);
      });

    setSubmission({
      faculty: "",
      dueDate: "",
      gradingStatus: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setValid(false);

    setSubmission((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div style={{ marginTop: "40px", paddingLeft: "50px" }}>
      <a href="/adminMenu" style={{ marginRight: "35px" }}>
        <ArrowBackIcon />
      </a>
      <Button
        variant="contained"
        size="large"
        endIcon={<CreateIcon />}
        onClick={loadAllSubs}
      >
        View All Submissions
      </Button>
      <div className="markingForm">
        <p className="heading" style={{ fontSize: "150%", fontWeight: "bold" }}>
          Add Submission Details
        </p>
        <form onSubmit={sendData}>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Faculty
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="faculty"
                placeholder="IT/ Bussness/ Engineering"
                onChange={handleChange}
                value={submission.faculty}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Due date
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                name="dueDate"
                placeholder="select due date"
                onChange={handleChange}
                value={submission.dueDate}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Grading Status
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="gradingStatus"
                placeholder="graded/ not graded"
                onChange={handleChange}
                value={submission.gradingStatus}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                <AddIcon />
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>{valid && <AllSubmissions />}</div>
    </div>
  );
}
