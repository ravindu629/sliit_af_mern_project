import React from "react";
import "../App.css";
import welcomImg from "../images/WelcomeSupervice.jpg";

export default function SupervisorMenu() {
  return (
    


    <div style={{ paddingLeft: "220px", paddingTop: "80px" }}>
     


      <h2 >  &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;Supervisor Menu</h2>

      <br></br><br></br>
     
      <div className="navItem">
        <a href="">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%", height:"135px", marginTop: "20px",borderBottomLeftRadius:"30px",borderColor:"black",backgroundColor:"#8000ff"}}
          >
            View Topic
          </button>
        </a>
        &nbsp;&nbsp;  &nbsp;&nbsp; 
        <a href="/addMarks">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%",height:"135px", marginTop: "20px" , backgroundColor:"#8000ff",borderColor:"black",borderTopRightRadius:"30px" }}
          >
            Add Marks
          </button>
        </a>

        &nbsp;&nbsp;  &nbsp;&nbsp; 
        <a href="">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%",height:"135px", marginTop: "20px" , backgroundColor:"#8000ff",borderColor:"black", borderBottomLeftRadius:"30px" }}
          >
            View Marking Scheme
          </button>
        </a>
      </div>

<br></br><br></br>
    
      <div className="navItem">
        <a href="/getMarks">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%",height:"135px", marginTop: "20px", backgroundColor:"#8000ff" ,borderTopRightRadius:"30px",borderColor:"black" }}
          >
            View Marks
          </button>
        </a>
        &nbsp;&nbsp;  &nbsp;&nbsp; 
        <a href="/ChatMenu">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%",height:"135px", marginTop: "20px", backgroundColor:"#8000ff" ,borderBottomLeftRadius:"30px",borderColor:"black" }}
          >
          Chat With Groups
          </button>
        </a>
        &nbsp;&nbsp;  &nbsp;&nbsp; 
        <a href="/Report">
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "20%", fontSize: "140%",height:"135px", marginTop: "20px", backgroundColor:"#8000ff" ,borderTopRightRadius:"30px", borderColor:"black" }}
          >
          Report
          </button>
        </a>

      </div>

      <div className="navItem">
      
      </div>

      <div className="navItem">
       
      </div>




      <div class="SupervisorSupportServices">
        <div class="StdSup">
          <h2 class="SuperServicesH2"> 🧑‍💻 Support Services</h2>
          <br />
          <h3><pre> 🌐 SLIIT Admin Support</pre></h3><br />
          <h4><pre>      https://Support.sliit.lk</pre></h4>
          <h3><pre> 📞 Hotline No</pre></h3><br />
          <h4><pre>      8.30 AM to 5.00 PM <br /></pre></h4>
          <h4><pre>      • 011 754 4801</pre></h4>
        </div>
      </div>



    </div>
  );
}
