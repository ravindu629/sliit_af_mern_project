import React,{useState} from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";




function AddMarks() {

  const [valid, setValid] = useState(false);
  const [mark, setmarks] = useState({
    fName:"",
    subject:"",
    groupId:"",
    topic:"",
    marks:"",
    sName:"",
    feedback:"",
  });

  let navigate = useNavigate();

  function sendData(e) {
    e.preventDefault()

    axios
      .post("http://localhost:5000/api/addMarks",mark)
      .then(() => {
        alert("Marks  added");
        setValid(true);
        navigate("/SupervisorMenu");
      })
      .catch((err) => {
        alert(err);
      });

      setmarks({
        fName:"",
        subject:"",
        groupId:"",
        topic:"",
        marks:"",
        sName:"",
        feedback:"",
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
    <div className="container">
      <div className="formStyle">
        <h2 className="heading">Add Marks</h2>
        <br></br>
        <form onSubmit={sendData}>
     

        <div className="form-group row">
            <label for="faname" className="col-sm-2 col-form-label">
          Document name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="faname"
                name="fName"
                placeholder="enter faculty name"
                onChange={handleChange}
                value={mark.fName}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="sname" className="col-sm-2 col-form-label">
            Subject
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="sname"
                name="subject"
                placeholder="enter subject"
                onChange={handleChange}
                value={mark.subject}
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="gname" className="col-sm-2 col-form-label">
            Group Id
            </label>
            <div className="col-sm-10">
              <input
                type="Text"
                className="form-control"
                id="gname"
                name="groupId"
                placeholder="enter group ID"
                onChange={handleChange}
                value={mark.groupId}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="tname" className="col-sm-2 col-form-label">
              Topic Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="tname"
                name="topic"
                placeholder="enter topic name"
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
                type="tel"
                className="form-control"
                maxlength="3"
                id="marks"
                name="marks"
                placeholder="enter marks"
                onChange={handleChange}
                value={mark.marks}
                required
              />
            </div>
          </div>


          <div className="form-group row">
            <label for="svname" className="col-sm-2 col-form-label">
              Supervisor Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="svname"
                name="sName"
                placeholder="enter supervisor name"
                onChange={handleChange}
                value={mark.sName}
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="fname" className="col-sm-2 col-form-label">
          Feedback
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fname"
                name="feedback"
                placeholder="enter feedback"
                onChange={handleChange}
                value={mark.feedback}
                required
              />
            </div>
          </div>
<br></br>
          <div className="form-group row">
        
            <div className="addmarkSubBtn">
              
              <button type="submit" className="btn btn-primary">
              &nbsp;&nbsp;
                Submit
                &nbsp;&nbsp;
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddMarks;
