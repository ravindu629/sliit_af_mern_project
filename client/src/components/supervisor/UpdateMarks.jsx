import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";
//import "./App.css";


 function addMarks(){

    const [valid, setValid] = useState(false);
    const [mark, setmarks] = useState({
      fName: "",
      subject: "",
      groupId: "",
      topic: "",
      marks: "",
      sName: "",
      feedback: "",
    });

    let navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        function getMark() {
          axios
            .get(`http://localhost:5000/api/addMarks/${id}`,)
            .then((res) => {
              setmarks(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getMark();
      }, []);

      function updateData(e) {
        e.preventDefault();
    
        axios
          .put(`http://localhost:5000/api/addMarks/${id}`, mark)
          .then(() => {
            alert("marks updated");
            navigate("/getMarks");
          })
          .catch((err) => {
            alert(err);
          });

     

      }
      function handleChange(event) {
        const { name, value } = event.target;
    
        setmarks((preValue) => {
          return {
            ...preValue,
            [name]: value,
          };
        });
      }

      return (

    <div class="container">
       <div className="formStyle">
           <form onSubmit={updateData}>
           <div class="form-group row">
            <label for="fname" class="col-sm-2 col-form-label">
             Faculty Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="fname"
                name="fName"
                placeholder="enter fuculty name"
                onChange={handleChange}
                value={mark.fName}
                required

               />
            </div>
          </div>

          <div class="form-group row">
            <label for="sname" class="col-sm-2 col-form-label">
             Subject
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="sname"
                name="subject"
                placeholder="enter subject name"
                onChange={handleChange}
                value={mark.subject}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="gname" class="col-sm-2 col-form-label">
              Group ID
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="gname"
                name=" groupId"
                placeholder="enter group id"
                onChange={handleChange}
                value={mark. groupId}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="tname" class="col-sm-2 col-form-label">
              Topic Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="tname"
                name=" topic"
                placeholder="enter group id"
                onChange={handleChange}
                value={mark. topic}
                required
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="mname" class="col-sm-2 col-form-label">
              Marks
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="mname"
                name=" marks"
                placeholder="enter marks"
                onChange={handleChange}
                value={mark. marks}
                required
              />
            </div>
          </div>
            
          <div class="form-group row">
            <label for="suname" class="col-sm-2 col-form-label">
              Supervisor Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="suname"
                name="  sName"
                placeholder="enter marks"
                onChange={handleChange}
                value={mark.sName}
                required
              />
            </div>
          </div>
          
          <div class="form-group row">
            <label for="fename" class="col-sm-2 col-form-label">
              Feedback
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="fename"
                name="feedback"
                placeholder="enter marks"
                onChange={handleChange}
                value={mark.feedback}
                required
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Update
              </button>
            </div>
          </div>

           </form>

       </div>
    </div>


      );
    

};

export default addMarks;

