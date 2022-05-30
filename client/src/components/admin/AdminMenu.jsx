import React from "react";
import "../App.css";

export default function AdminMenu() {
  return (
    <div style={{ paddingLeft: "400px", paddingTop: "80px" }}>
      <h2 style={{ fontWeight: "bold" }}>Admin Menu</h2>
      <div className="navItem">
        <a href="/manageUsers">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            Manage Users
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
            Add a new Admin
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
            Create submission types
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
            Create marking schemes
          </button>
        </a>
      </div>
    </div>
  );
}
