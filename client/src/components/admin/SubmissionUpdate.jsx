import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
import "../App.css";
import UpgradeIcon from "@mui/icons-material/Upgrade";

function SubmissionUpdate() {
  const [submission, setSubmission] = useState({
    faculty: "",
    dueDate: "",
    gradingStatus: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    function getSub() {
      axios
        .get(`http://localhost:5000/api/submissions/${id}`)
        .then((res) => {
          setSubmission(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getSub();
  }, []);

  function updateData(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/api/submissions/${id}`, submission)
      .then(() => {
        alert("submission updated");
        navigate("/submission");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setSubmission((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <div className="markingForm">
        <p className="heading" style={{ fontSize: "150%", fontWeight: "bold" }}>
          Update Submission Details
        </p>
        <form onSubmit={updateData}>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Faculty
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="faculty"
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
                onChange={handleChange}
                value={submission.gradingStatus}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                <UpgradeIcon />
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmissionUpdate;
