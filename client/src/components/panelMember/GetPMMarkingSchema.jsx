import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Button from "@mui/material/Button";

export default function ITScheme() {
  const [ITSchema, setITSchema] = useState([]);

  useEffect(() => {
    function getMSchema() {
      axios
        .get("http://localhost:5000/api/markingSchemas")
        .then((res) => {
          const results = res.data;
          setITSchema(results.filter((result) => result.faculty === "IT"));
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMSchema();
  }, []);

  return (
    <div>
      <div className="mschms">
        <div style={{ marginBottom: "40px",marginTop: "30px", marginLeft: "15px"}}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PictureAsPdfIcon />}
            onClick={window.print}
          >
            Download PDF
          </Button>
        </div>
        <h2
          style={{ fontSize: "150%", fontWeight: "bold", textAlign: "center" }}
        >
          IT Students Marking Schema
        </h2><br/>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Marking Criteria</th>
              <th scope="col">Description</th>
              <th scope="col">Marking Distribution</th>
            </tr>
          </thead>
          <tbody className="table-danger">
            {ITSchema.map((marking, index) => {
              return (
                <tr key={marking._id}>
                  <td>{index + 1}</td>
                  <td>{marking.criteria}</td>
                  <td>{marking.desc}</td>
                  <td>{marking.marks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}