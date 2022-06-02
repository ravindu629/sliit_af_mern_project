import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Button from "@mui/material/Button";

export default function BussnessScheme() {
  const [BussnessSchema, setBussnessSchema] = useState([]);

  useEffect(() => {
    function getMSchema() {
      axios
        .get("http://localhost:5000/api/markingSchemas")
        .then((res) => {
          const results = res.data;
          setBussnessSchema(
            results.filter((result) => result.faculty === "Bussness")
          );
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
        <div style={{ marginBottom: "30px" }}>
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
          Bussness Students Marking Schema
        </h2>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Marking Criteria</th>
              <th scope="col">Description</th>
              <th scope="col">Marking Distribution</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {BussnessSchema.map((marking, index) => {
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
