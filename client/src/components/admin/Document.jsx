import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Document(props) {
  const [upload, setUpload] = useState({
    faculty: props.fac,
    gradingStatus: props.gStatus,
    stdId: "",
    comment: "",
    file: "",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", upload.file);
    formData.append("gradingStatus", upload.gradingStatus);
    formData.append("stdId", upload.stdId);
    formData.append("comment", upload.comment);
    formData.append("faculty", upload.faculty);

    axios
      .post("http://localhost:5000/api/files", formData)
      .then(() => {
        alert("file added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setUpload((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function handleFile(e) {
    setUpload({ ...upload, file: e.target.files[0] });
  }

  return (
    <div>
      <div className="note">
        <form onSubmit={sendData}>
          <table class="table table-striped">
            <tbody>
              <tr>
                <th scope="row">Faculty</th>
                <td style={{ color: "red", fontWeight: "bold" }}>
                  {props.fac}
                </td>
              </tr>
              <tr>
                <th scope="row">Grading Status</th>
                <td>{props.gStatus}</td>
              </tr>
              <tr>
                <th scope="row">Due Date</th>
                <td>{props.dDate}</td>
              </tr>
              <tr>
                <th scope="row">Time Remaining</th>
                <td>Jacob</td>
              </tr>

              <tr>
                <th scope="row">Student ID</th>
                <td>
                  <input
                    type="text"
                    placeholder="Enter student id"
                    name="stdId"
                    onChange={handleChange}
                    value={upload.stdId}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Submission Comment</th>
                <td>
                  <textarea
                    type="text"
                    placeholder="enter comments"
                    name="comment"
                    onChange={handleChange}
                    value={upload.comment}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Upload File</th>
                <td>
                  <input
                    type="file"
                    accept=".png, .pdf, .jpeg"
                    name="file"
                    onChange={handleFile}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <button type="submit" style={{ fontSize: "110%" }}>
                    <b>Upload</b>
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
