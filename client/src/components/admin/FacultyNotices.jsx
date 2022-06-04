import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "../App.css";
import { useNavigate } from "react-router-dom";
import UploadDocuments from "./UploadDocuments";

export default function FacultyNotices() {
  let navigate = useNavigate();

  function itScheme() {
    navigate("/itScheme");
  }

  function bussnessScheme() {
    navigate("/bussnessScheme");
  }

  function engScheme() {
    navigate("/engScheme");
  }

  return (
    <div className="facultyNotices">
      <p style={{ fontStyle: "italic", fontSize: "130%", fontWeight: "bold" }}>
        View and Download Marking Schemes
      </p>
      <div>
        <Button
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          onClick={itScheme}
        >
          IT students Marking Scheme
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          onClick={bussnessScheme}
        >
          Bussness students Marking Scheme
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
          onClick={engScheme}
        >
          Engineering students Marking Scheme
        </Button>
      </div>

      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <hr style={{ height: "5px" }} />
      </div>

      <div>
        <p
          style={{ fontStyle: "italic", fontSize: "130%", fontWeight: "bold" }}
        >
          Upload your document/presentation templates to the relevant faculty
          submission form
        </p>
      </div>
      <div>
        <UploadDocuments />
      </div>
    </div>
  );
}
