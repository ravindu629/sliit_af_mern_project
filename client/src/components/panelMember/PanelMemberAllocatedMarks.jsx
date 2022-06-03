import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllPMmarks(){
    const[PMmark , setMarks] = useState([]);

    useEffect(() => {
        function getPMmarks() {
            axios
                .get("http://localhost:5000/api/GetPMmarks")
                .then((res) => {
                    setMarks(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getPMmarks();
    }, []);

    return (
        <div className="all">
        <h2 className="heading">All Presentation Marks Details</h2>

        <br></br><br></br>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Faculty Name</th>
              <th scope="col">Module</th>
              <th scope="col">Group ID</th>
              <th scope="col">Presentation name</th>
              <th scope="col">Marks</th>
              <th scope="col">Feedback</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {PMmark.map((PMmark, index) => {
              return (
                <tr key={PMmark._id}>
                  <td>{index + 1}</td>
                  <td>{PMmark.fName}</td>
                  <td>{PMmark.subject}</td>
                  <td>{PMmark.groupId}</td>
                  <td>{PMmark.topic}</td>
                  <td>{PMmark. marks}</td>
                  <td>{PMmark. feedback}</td>
                
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      );
}

export default AllPMmarks;