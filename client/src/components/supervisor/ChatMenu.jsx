import React from "react";
import "../App.css";

export default function SelectChat(){
    
return(

    <div style={{ paddingLeft: "400px", paddingTop: "80px" }}>
     
    <h1 > Chats </h1>

    <div className="navItem" >
    <a href="">
      <button
        type="button"
        className="btn btn-secondary menuBtn"
        style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
      >
        Chat with staff members
      </button>
    </a>
  </div>

  <div className="navItem" >
    <a href="">
      <button
        type="button"
        className="btn btn-secondary menuBtn"
        style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
      >
        Chat with students
      </button>
    </a>
  </div>

            
</div>


);


}

