import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function addPMMarks(){

    const [valid,setValid] = useState(false);
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

    function sendData(e){
        e.preventDefault()

        axios
            .post("http://localhost:5000/api/addPMMarks",PMmark)
            .then(() => {
                alert("Marks added");
                setValid(true);
                navigate("/panelMenu");
            })
            .catch((err) => {
                alert(err);
           });

           setMarks({
            fName:"",
            subject:"",
            groupId:"",
            topic:"",
            marks:"",
            PMname:"",
            feedback:"",
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
        <div className="container">
          <div className="formStyle">
            <h2 className="heading">Allocate Presentation Marks</h2>
            <form onSubmit={sendData}>
    
            <div className="form-group row">
                <label for="facName" className="col-sm-2 col-form-label">
              Faculty name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="facName"
                    name="fName"
                    placeholder="Enter faculty name"
                    onChange={handleChange}
                    value={PMmark.fName}
                    required
                  />
                </div>
              </div>
    
              <div className="form-group row">
                <label for="sName" className="col-sm-2 col-form-label">
                Module
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="sName"
                    name="subject"
                    placeholder="Enter Module"
                    onChange={handleChange}
                    value={PMmark.subject}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="gName" className="col-sm-2 col-form-label">
                Group Id
                </label>
                <div className="col-sm-10">
                  <input
                    type="Text"
                    className="form-control"
                    id="gName"
                    name="groupId"
                    placeholder="Enter Group ID"
                    onChange={handleChange}
                    value={PMmark.groupId}
                    required
                  />
                </div>
              </div>
    
              <div className="form-group row">
                <label for="tName" className="col-sm-2 col-form-label">
                  Presentation Topic
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="tName"
                    name="topic"
                    placeholder="Enter Presentation Topic"
                    onChange={handleChange}
                    value={PMmark.topic}
                    required
                  />
                </div>
              </div>
    
              <div className="form-group row">
                <label for="marks" className="col-sm-2 col-form-label">
                Marks
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="marks"
                    name="marks"
                    placeholder="Allocate Marks"
                    onChange={handleChange}
                    value={PMmark.marks}
                    required
                  />
                </div>
              </div>
    
    
              <div className="form-group row">
                <label for="PMname" className="col-sm-2 col-form-label">
                  Panel Member Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="PMname"
                    name="PMname"
                    placeholder="Enter Panel Member Name"
                    onChange={handleChange}
                    value={PMmark.PMname}
                    required
                  />
                </div>
              </div>
    
              <div className="form-group row">
                <label for="feedback" className="col-sm-2 col-form-label">
              Feedback
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    placeholder="Give Feedback On Presentation."
                    onChange={handleChange}
                    value={PMmark.feedback}
                    required
                  />
                </div>
              </div>
    
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}

export default addPMMarks;
    