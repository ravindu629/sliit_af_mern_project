import React from "react";
import "../App.css";
import welcomImg from "../images/WelcomeSupervice.jpg";

export default function SupervisorMenu() {
  return (
    <div style={{ paddingLeft: "200px", paddingTop: "80px" }}>

  
      <h2>  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;Supervisor Menu</h2>

      <br></br><br></br>
     
      <div className="navItem">
        <a href="">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px", backgroundColor:"#8000ff" }}
          >
            View Topic
          </button>
        </a>
      </div>


      <div className="navItem">
        <a href="/addMarks">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" , backgroundColor:"#8000ff"}}
          >
            Add Marks
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" , backgroundColor:"#8000ff"  }}
          >
            View Marking Scheme
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/getMarks">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px", backgroundColor:"#8000ff"  }}
          >
            View Marks
          </button>
        </a>
      </div>

      <div className="navItem">
        <a href="/ChatMenu">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px", backgroundColor:"#8000ff"  }}
          >
          Chat With Groups
          </button>
        </a>
      </div>
    </div>
  );
}
