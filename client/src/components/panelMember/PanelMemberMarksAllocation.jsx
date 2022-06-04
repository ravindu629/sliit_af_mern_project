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
            .post("http://localhost:5000/api/PanelMember",PMmark)
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
          <div className="formStyle" style={{marginTop:"1%", marginLeft: "10%" , backgroundColor: "gray", width: "850px"}}>
           
            
            <h2 className="heading">Allocate Presentation Marks</h2>
            <form onSubmit={sendData} style={{ width: "800px",marginLeft: "3%"}}>
    
            <div className="form-group row">
                <label for="facName" className="input-group-text">
              <b>Faculty name</b>
                </label>
                <div className="input-group-text">
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
                <label for="sName" className="input-group-text">
                <b>Module</b>
                </label>
                <div className="input-group-text">
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
                <label for="gName" className="input-group-text">
                <b>Group Id</b>
                </label>
                <div className="input-group-text">
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
                <label for="tName" className="input-group-text">
                 <b>Presentation Topic</b> 
                </label>
                <div className="input-group-text">
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
                <label for="marks" className="input-group-text">
                <b>Marks</b>
                </label>
                <div className="input-group-text">
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
                <label for="PMname" className="input-group-text">
                 <b>Panel Member Name</b> 
                </label>
                <div className="input-group-text">
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
                <label for="feedback" className="input-group-text">
              <b>Feedback</b>
                </label>
                <div className="input-group-text">
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
              
              <div>
              <br/> <br/> <br/> <br/>
              
        <div class="pMAllocatepagebtn">
        <div class="StdSup">
        <div className="navItem">
        <a href="https://chat.whatsapp.com/COcoBXUJo4812jj5QS3Nns">
          <button
            type="button"
            className="btn btn-warning"
            style={{ width: "35%", fontSize: "100%", marginTop: "90px" ,marginLeft:"125px", borderRadius:"50px" }}
          >
           💬<b>Chat Link</b>
          </button>
        </a>
        <div className="form-group row">
                <button 
                  type="submit" 
                  className="btn btn-warning"
                  style={{ width: "35%", fontSize: "100%", marginTop: "20px" ,marginLeft:"131px", borderRadius:"50px" }}
                  >
                    🔴<b>Submit</b>
                  </button>
        </div>
        <div className ="form-group row">
                <a href="https://drive.google.com/drive/folders/11epJr-JiIu_bbxHohzgQc5Elddv-Ni5H?usp=sharing">
                  <button type="button" className="btn btn-warning" style={{ width: "45%", fontSize: "100%", marginTop: "20px", borderRadius:"50px",marginLeft:"109px"  }}>
                  📰<b>&nbsp;&nbsp;&nbsp;Download PPT&nbsp;&nbsp;&nbsp;</b> 
                  </button>
                  </a>
                
            </div>
          
      </div>
      </div>
      </div>
              </div>
              
            </form>
          </div>
        </div>
      );
}

export default addPMMarks;
    