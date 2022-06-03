import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Document from "./Document";

export default function UploadDocuments() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    function getSubs() {
      axios
        .get("http://localhost:5000/api/submissions")
        .then((res) => {
          setSubmissions(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getSubs();
  }, []);

  return (
    <div>
      {submissions.map((submission, index) => {
        return (
          <Document
            key={index}
            fac={submission.faculty}
            dDate={submission.dueDate}
            gStatus={submission.gradingStatus}
          />
        );
      })}
    </div>
  );
}
