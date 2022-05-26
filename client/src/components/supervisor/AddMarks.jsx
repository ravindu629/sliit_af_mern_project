import React from "react";
import "../App.css";

export default function AddMarks() {
  return (
    <div className="container">
      <div className="formStyle">
        <h2 className="heading">Add Marks</h2>
        <form>
          <div className="form-group row">
            <label for="fname" className="col-sm-2 col-form-label">
              Group Id
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fname"
                name="fName"
                placeholder="enter group id"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="lname" className="col-sm-2 col-form-label">
              Marks
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="lname"
                name="lName"
                placeholder="enter marks"
                required
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
