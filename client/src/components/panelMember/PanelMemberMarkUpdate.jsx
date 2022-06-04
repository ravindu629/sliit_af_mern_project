import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
//import "./App.css";


 function updateDetails(){

  const [valid, setValid] = useState(false);
  const [PMmark,setMarks] = useState({
    fName:"",
    subject:"",
    groupId:"",
    topic:"",
    marks:"",
    PMname:"",
    feedback:"",
});

  let navigate = useNavigate();

  const { id } = useParams();

    useEffect(() => {
      function  GetPMmark() {
        axios
          .get(`http://localhost:5000/api/PanelMember/${id}`)
          .then((res) => {
            setMarks(res.data);
          })
          .catch((err) => {
            alert(err.message);
          });
      }
       GetPMmark();
    }, []);

       
    function updatePMmark(e) {
      e.preventDefault();

      //const updatedPMmark = PMmark;
  
      axios
        .put(`http://localhost:5000/api/PanelMember/${id}`,PMmark)
        .then(() => {
          alert("marks updated");
          navigate("/PanelMemberAllocatedMarks");
        })
        .catch((err) => {
          alert(err);
        });
       }


      function handleChange(event) {
        const { name, value } = event.target;
    
        setMarks((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }

      return (

    <div class="container">
      <br></br>
         <h2 className="heading">Update Marks Details</h2>
<br></br>
       <div className="formStyle">
           <form onSubmit={updatePMmark}>
           <div class="form-group row">
            <label for="facName" class="col-sm-2 col-form-label">
             Faculty Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="facName"
                name="fName"
                placeholder="enter faculty name"
                onChange={handleChange}
                value={PMmark.fName}
                required

               />
            </div>
          </div>

          <div class="form-group row">
            <label for="sName" class="col-sm-2 col-form-label">
            Module
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="sName"
                name="subject"
                placeholder="enter subject name"
                onChange={handleChange}
                value={PMmark.subject}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="groupId" class="col-sm-2 col-form-label">
              Group ID
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="groupId"
                name="groupId"
                placeholder="enter group id"
                onChange={handleChange}
                value={PMmark.groupId}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="tName" class="col-sm-2 col-form-label">
              Presentation Topic
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="tName"
                name="topic"
                placeholder="enter group id"
                onChange={handleChange}
                value={PMmark.topic}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="marks" class="col-sm-2 col-form-label">
              Marks
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="marks"
                name="marks"
                placeholder="enter marks"
                onChange={handleChange}
                value={PMmark.marks}
                required
              />
            </div>
          </div>
            
          <div class="form-group row">
            <label for="PMname" class="col-sm-2 col-form-label">
              Supervisor Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="PMname"
                name="PMname"
                placeholder="enter marks"
                onChange={handleChange}
                value={PMmark.PMname}
                required
              />
            </div>
          </div>
          
          <div class="form-group row">
            <label for="feedback" class="col-sm-2 col-form-label">
              Feedback
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="feedback"
                name="feedback"
                placeholder="Give Feedback On Presentation."
                onChange={handleChange}
                value={PMmark.feedback}
                required
              />
            </div>
          </div>
          <br></br>
          
          <div class="form-group row">
          &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp; 
            <div  className="UpdateSubBtn">
              
              <button type="submit" class="btn btn-primary" > 
              &nbsp;&nbsp;
                Update
                &nbsp;&nbsp;
              </button>   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp; 

         

            </div>
          </div>

           
           </form>

       </div>
    </div>


      );
    

};

export default updateDetails;

