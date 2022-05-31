import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


 function AllMarks(){
  const [Marks, setmarks] = useState([]);

    useEffect(() => {
        function getMarks() {
          axios
            .get("http://localhost:5000/api/addMarks")
            .then((res) => {
              setmarks(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getMarks();
      }, []);

      function deleteMarks(_id) {
        axios
          .delete("http://localhost:5000/api/addMarks/" + _id)
          .then((res) => {
            console.log(res.data);
    
            alert("Details deleted");
          })
          .catch((err) => {
            alert(err);
          });
    
        setUsers(Marks.filter((marks) => marks._id !== _id));
      }
    



  
      return (
        <div className="all">
        <h2 className="heading">All Marks Details</h2>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Faculty Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Group ID</th>
              <th scope="col">Topic name</th>
              <th scope="col">Marks</th>
              <th scope="col">Feedback</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {Marks.map((marks, index) => {
              return (
                <tr key={marks._id}>
                  <td>{index + 1}</td>
                  <td>{marks.fName}</td>
                  <td>{marks.subject}</td>
                  <td>{marks.groupId}</td>
                  <td>{marks.topic}</td>
                  <td>{marks. marks}</td>
                  <td>{marks. feedback}</td>
                
                  <td>
                  <a
                    className="btn btn-warning"
                    href={`/updateMarks/${marks._id}`}
                  >
                    <EditIcon />
                    &nbsp;&nbsp; Update
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
                        deleteMarks(marks._id);
                    }}
                  >
                    <DeleteForeverIcon />
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

export default AllMarks;