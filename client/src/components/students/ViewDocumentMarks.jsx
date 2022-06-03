import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

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


  
      return (
        <div className="all">
          <button  class="reserchTopicPageBtn button4" onClick={window.print}> 📋 Download PDF</button>      
         
            <a href="/ViewDocumentMarksReport">
              <button type="button" className="ViewMarkNavButton button6">
               ⭐ Student Evaluation &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Progress
              </button>
            </a>
         

        <h2 className="heading">All Marks Details</h2>

        <br></br>
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
                
                 
               
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      );
}

export default AllMarks;