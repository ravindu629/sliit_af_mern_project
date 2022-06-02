import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function MarkingTable(props) {
  const [mSchema, setMSchema] = useState([]);

  useEffect(() => {
    function getMSchema() {
      axios
        .get("http://localhost:5000/api/markingSchemas")
        .then((res) => {
          const results = res.data;
          setMSchema(
            results.filter((result) => result.faculty === props.section)
          );
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getMSchema();
  }, []);

  function deleteMarking(_id) {
    axios
      .delete("http://localhost:5000/api/markingSchemas/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("marking deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setMSchema(mSchema.filter((marking) => marking._id !== _id));
  }

  return (
    <div className="">
      <h2 style={{ fontSize: "150%", fontWeight: "bold", textAlign: "center" }}>
        {props.section} Students Marking Schema
      </h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Marking Criteria</th>
            <th scope="col">Description</th>
            <th scope="col">Marking Distribution</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-light">
          {mSchema.map((marking, index) => {
            return (
              <tr key={marking._id}>
                <td>{index + 1}</td>
                <td>{marking.criteria}</td>
                <td>{marking.desc}</td>
                <td>{marking.marks}</td>
                <td>
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this record?"
                        )
                      )
                        deleteMarking(marking._id);
                    }}
                  >
                    <DeleteForeverIcon /> Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MarkingTable;
