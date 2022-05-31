import React from "react";
import "../App.css";

export default function SupervisorMenu() {
  return (
    <div style={{ paddingLeft: "400px", paddingTop: "80px" }}>
      <h2>Supervisor Menu</h2>
      <div className="navItem">
        <a href="/addMarks">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            Add Marks
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            View xxxxxxxxxxxxxx
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            Add xxxxxxxxxxxxxxx
          </button>
        </a>
      </div>
    </div>
  );
}
