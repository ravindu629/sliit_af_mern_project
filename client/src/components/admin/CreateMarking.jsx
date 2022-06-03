import React, { useState } from "react";
import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import AddMarking from "./AddMarking";
import MarkingTable from "./MarkingTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CreateMarking() {
  const [it, setIt] = useState(true);
  const [bussness, setBussness] = useState(false);
  const [eng, setEng] = useState(false);

  function itStudentsSchema() {
    setIt(true);
    setBussness(false);
    setEng(false);
  }

  function bussnessStudentsSchema() {
    setIt(false);
    setBussness(true);
    setEng(false);
  }

  function engStudentsSchema() {
    setIt(false);
    setBussness(false);
    setEng(true);
  }

  return (
    <div>
      <div style={{ marginTop: "40px", paddingLeft: "50px" }}>
        <a href="/adminMenu" style={{ marginRight: "35px" }}>
          <ArrowBackIcon />
        </a>
        <Button
          variant="contained"
          size="large"
          endIcon={<CreateIcon />}
          onClick={itStudentsSchema}
        >
          IT students
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          size="large"
          endIcon={<CreateIcon />}
          onClick={bussnessStudentsSchema}
        >
          Bussness students
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          size="large"
          endIcon={<CreateIcon />}
          onClick={engStudentsSchema}
        >
          Engineering students
        </Button>
      </div>

      <div>
        {it && (
          <div>
            <AddMarking section="IT" />{" "}
          </div>
        )}
        {bussness && (
          <div>
            <AddMarking section="Bussness" />
          </div>
        )}
        {eng && (
          <div>
            <AddMarking section="Engineering" />
          </div>
        )}
      </div>
    </div>
  );
}
