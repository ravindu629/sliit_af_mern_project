import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import AddIcon from "@mui/icons-material/Add";

export default function AddSubmission() {
  const [upload, setUpload] = useState({
    fName: "",
    photo: "",
  });

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("photo", upload.photo);
    formData.append("fName", upload.fName);

    axios
      .post("http://localhost:5000/api/files", formData)
      .then(() => {
        alert("file added");
      })
      .catch((err) => {
        alert(err);
      });

    setUpload({
      fName: "",
      photo: "",
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

  function handlePhoto(e) {
    setUpload({ ...upload, photo: e.target.files[0] });
    console.log(upload.photo);
  }

  return (
    <div>
      <div className="container">
        <div className="formStyle">
          <h2 className="heading">Upload file</h2>
          <form onSubmit={sendData}>
            <div className="form-group row">
              <label for="fname" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  placeholder="enter first name"
                  onChange={handleChange}
                  value={upload.fName}
                  required
                />
              </div>
            </div>

            <div className="form-group row">
              <label for="stdid" className="col-sm-2 col-form-label">
                Photo
              </label>
              <div className="col-sm-10">
                <input
                  type="file"
                  accept=".png, .pdf, .jpeg"
                  className="form-control"
                  name="adminId"
                  onChange={handlePhoto}
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
    </div>
  );
}
