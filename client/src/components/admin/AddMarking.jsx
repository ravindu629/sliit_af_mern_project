import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import "../App.css";
import MarkingTable from "./MarkingTable";

function AddMarking(props) {
  const [marking, setMarking] = useState({
    faculty: props.section,
    criteria: "",
    desc: "",
    marks: "",
  });
  const [valid, setValid] = useState(true);

  function loadAllSchemes() {
    setValid(true);
  }

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/markingSchemas", marking)
      .then(() => {
        alert("marking added");
        setValid(true);
      })
      .catch((err) => {
        alert(err);
      });

    setMarking({
      faculty: props.section,
      criteria: "",
      desc: "",
      marks: "",
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setValid(false);

    setMarking((preValue) => {
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
          Create marking schema for {props.section} students
        </p>
        <form onSubmit={sendData}>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Marking Criteria
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                name="criteria"
                placeholder="enter marking criteria"
                onChange={handleChange}
                value={marking.criteria}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                type="text"
                className="form-control"
                name="desc"
                placeholder="enter description"
                onChange={handleChange}
                value={marking.desc}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="" className="col-sm-2 col-form-label">
              Marking Distribution
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                name="marks"
                placeholder="enter marks for relevant criteria"
                onChange={handleChange}
                value={marking.marks}
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
      {valid && (
        <div className="markingTable">
          <MarkingTable section={props.section} />
        </div>
      )}
    </div>
  );
}

export default AddMarking;
