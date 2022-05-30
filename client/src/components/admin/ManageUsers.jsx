import React, { useState } from "react";
import "../App.css";
import Students from "./Students";

export default function ManageUsers() {
  const [students, setStudents] = useState(true);
  const [staff, setStaff] = useState(false);
  const [admin, setAdmin] = useState(false);

  function studentsManage() {
    setStudents(true);
    setStaff(false);
    setAdmin(false);
  }

  return (
    <div>
      <div className="topMenu">
        <button
          type="button"
          className="btn  btn-lg btn-outline-primary userNavBtn"
          onClick={studentsManage}
        >
          Manage Students
        </button>

        <a href="/studentsManage">
          <button
            type="button"
            className="btn  btn-lg btn-outline-primary userNavBtn"
          >
            Manage Staff
          </button>
        </a>
        <a href="/studentsManage">
          <button
            type="button"
            className="btn  btn-lg btn-outline-primary userNavBtn"
          >
            Manage Admin
          </button>
        </a>
      </div>
      <div>{students && <Students />}</div>
    </div>
  );
}
