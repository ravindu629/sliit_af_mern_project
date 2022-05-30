import React, { useState } from "react";
import "../App.css";
import Staff from "./Staff";
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

  function staffManage() {
    setStudents(false);
    setStaff(true);
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

        <button
          type="button"
          className="btn  btn-lg btn-outline-primary userNavBtn"
          onClick={staffManage}
        >
          Manage Staff
        </button>
        <button
          type="button"
          className="btn  btn-lg btn-outline-primary userNavBtn"
        >
          Manage Admin
        </button>
      </div>
      <div>{students && <Students />}</div>
      <div>{staff && <Staff />}</div>
    </div>
  );
}
