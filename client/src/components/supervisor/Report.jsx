import React, { useState, useEffect } from "react";
import axios from "axios";

function getReport(){
    
    const [report, setreport] = useState([]);

    useEffect(() => {
        function getMarks() {
          axios
            .get("http://localhost:5000/api/addMarks")
            .then((res) => {
              setreport(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getMarks();
      }, []);

return (
      <div className="all">
           <h2 className="heading">Report</h2>
        <table className="table table-bordered" >
          <thead className="table-dark">
            <tr>
              <th class="table-primary" scope="col">No</th>
              <th class="table-secondary" scope="col">Faculty Name</th>
              <th class="table-success" scope="col">Subject</th>
              <th class="table-danger" scope="col">Group ID</th>
              <th class="table-warning"  scope="col">Topic name</th>
              <th class="table-info"  scope="col">Marks</th>
              <th class="table-light" scope="col">Supervisor Name</th>
              <th class="table-dark" scope="col">Feedback</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-light">
            {report.map((marks, index) => {
              return (
                <tr key={marks._id}>
                  <td>{index + 1}</td>
                  <td>{marks.fName}</td>
                  <td>{marks.subject}</td>
                  <td>{marks.groupId}</td>
                  <td>{marks.topic}</td>
                  <td>{marks. marks}</td>
                   <td>{marks. sName}</td>
                  
                  <td>{marks. feedback}</td>
                
                  <td>
                 
                  </td>
               
                </tr>
              );
            })}
            <br></br><br></br><br></br>
            <button  class="btn btn-warning" onClick={window.print}>Print Report </button>
          </tbody>
        
        </table>



      </div>


);


}

export default getReport;