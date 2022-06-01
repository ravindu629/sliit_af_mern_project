import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./user.css";

function addPanelMemberMarks(){

    const [valid,setValid] = useState(false);
    const [mark,setMarks] = useState({
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
            .post("http://localhost:5000//api/PanelMember/post",mark)
            .then(() => {
                alert("Marks added");
                setValid(true);
                navigate("/PanelMemberMenu");
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
                    value={mark.fName}
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
                    value={mark.subject}
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
                    value={mark.groupId}
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
                    value={mark.topic}
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
                    value={mark.marks}
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
                    value={mark.sName}
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
                    value={mark.feedback}
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

export default addPanelMemberMarks;
    