import React, { useState } from "react";
import "../App.css";
import Admins from "./Admins";
import Staff from "./Staff";
import Students from "./Students";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Button from "@mui/material/Button";

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

  function adminManage() {
    setStudents(false);
    setStaff(false);
    setAdmin(true);
  }

  return (
    <div>
      <div className="topMenu">
        <div>
          <a href="/adminMenu" style={{ marginRight: "35px" }}>
            <ArrowBackIcon />
          </a>
          <Button
            variant="contained"
            size="large"
            endIcon={<ManageAccountsIcon />}
            onClick={studentsManage}
          >
            Manage Students
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            size="large"
            endIcon={<ManageAccountsIcon />}
            onClick={staffManage}
          >
            Manage Staff
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            size="large"
            endIcon={<ManageAccountsIcon />}
            onClick={adminManage}
          >
            Manage Admin
          </Button>
        </div>
      </div>
      <div>{students && <Students />}</div>
      <div>{staff && <Staff />}</div>
      <div>{admin && <Admins />}</div>
    </div>
  );
}
