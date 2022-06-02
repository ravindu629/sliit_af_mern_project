import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function AllSubmissions() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    function getSubs() {
      axios
        .get("http://localhost:5000/api/submissions")
        .then((res) => {
          setSubs(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getSubs();
  }, []);

  function deleteSub(_id) {
    axios
      .delete("http://localhost:5000/api/submissions/" + _id)
      .then((res) => {
        console.log(res.data);

        alert("submission deleted");
      })
      .catch((err) => {
        alert(err);
      });

    setSubs(subs.filter((sub) => sub._id !== _id));
  }

  return (
    <div className="markingTable">
      <h2 style={{ fontSize: "150%", fontWeight: "bold", textAlign: "center" }}>
        All Submissions Details
      </h2>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Faculty</th>
            <th scope="col">Due date</th>
            <th scope="col">Grading Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-light">
          {subs.map((sub, index) => {
            return (
              <tr key={sub._id}>
                <td>{index + 1}</td>
                <td>{sub.faculty}</td>
                <td>{sub.dueDate}</td>
                <td>{sub.gradingStatus}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/updateSubmission/${sub._id}`}
                  >
                    <EditIcon /> Update
                  </a>
                  &nbsp;&nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this record?"
                        )
                      )
                        deleteSub(sub._id);
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

export default AllSubmissions;
