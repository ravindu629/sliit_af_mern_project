import React, { useState } from "react";
import "../App.css";
import Button from "@mui/material/Button";
import SupervisorLogin from "./SupervisorLogin";
import PanelMemberLogin from "./PanelMemberLogin";

function StaffLogin() {
  const [sup, setSup] = useState(true);
  const [panel, setPanel] = useState(false);

  function setSupervisor() {
    setSup(true);
    setPanel(false);
  }

  function setPanelMember() {
    setSup(false);
    setPanel(true);
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="loginBtn">
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={setSupervisor}
          >
            Supervisor Login
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button
            variant="outlined"
            size="large"
            color="error"
            onClick={setPanelMember}
          >
            Panel Member Login
          </Button>
        </div>
        <div className="loginForm">
          {sup ? (
            <SupervisorLogin title="Supervisor" />
          ) : (
            <PanelMemberLogin title="Panel Member" />
          )}
        </div>
      </div>
    </div>
  );
}

export default StaffLogin;
