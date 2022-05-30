import React from "react";
import "../App.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function AdminMenu() {
  return (
    <div className="adminMenu">
      <div className="admMenu">
        <h2 style={{ fontWeight: "bold" }}>Admin Menu</h2>
        <div className="navItem">
          <a href="/manageUsers">
            <button type="button" className="btn btn-secondary menuBtn">
              <ArrowCircleRightIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; Manage Users
            </button>
          </a>
        </div>
        <div className="navItem">
          <a href="/addAdmin">
            <button type="button" className="btn btn-secondary menuBtn">
              <ArrowCircleRightIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; Add a new Admin
            </button>
          </a>
        </div>
        <div className="navItem">
          <a href="">
            <button type="button" className="btn btn-secondary menuBtn">
              <ArrowCircleRightIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; Create submission types
            </button>
          </a>
        </div>
        <div className="navItem">
          <a href="">
            <button type="button" className="btn btn-secondary menuBtn">
              <ArrowCircleRightIcon />
              &nbsp;&nbsp;&nbsp;&nbsp; Create marking schemes
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
