import React from "react";
import "../App.css";

export default function SelectChat(){
    
return(

    <div style={{ paddingLeft: "570px", paddingTop: "80px" }}>
     
    <h1 > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chats </h1>
    <br></br>
    <div className="navItem" >
    <a href="">
      <button 
        type="button"
        class="btn btn-primary btn-lg btn-block"
        style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
      >
        Chat with staff members
      </button>
    </a>
  </div>
  <br></br>

  <div className="navItem" >
  
    <a href="https://chat.whatsapp.com/IeWqV057yWq7k4z0taEf7U">
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
      >
        Chat with students
      </button>
    </a>
  </div>

            
</div>


);


}

