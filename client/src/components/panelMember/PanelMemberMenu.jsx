import React from "react";
import "../App.css";

export default function PanelMemberMenu() {
  return (
    <div style={{ paddingLeft: "400px", paddingTop: "80px" }}>
      <div style={{ backgroundColor: "#ffffcc" , width: "600px", height: "550px", borderRadius:"50px",borderStyle: "solid"}}>
      <h2 style={{ fontWeight: "bold", fontSize: "30px",paddingLeft: "106px", paddingTop: "15px" }} >&nbsp;&nbsp;&nbsp;<i>PANEL MEMBER MENU</i></h2>
      <br/>
      <div className="navItem" style={{ paddingLeft: "100px", paddingTop: "12px" }}>
        <a href="/ViewPresentationTopics">
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "80%", fontSize: "140%", marginTop: "10px", borderRadius:"50px" }}
          >
            View Topics
          </button>
        </a>
      </div>
      <div className="navItem" style={{ paddingLeft: "100px", paddingTop: "12px" }} >
        <a href="/PanelMemberMarksAllocation">
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "80%", fontSize: "140%", marginTop: "20px", borderRadius:"50px"  }}
          >
            Allocate Marks
          </button>
        </a>
      </div>
      <div className="navItem" style={{ paddingLeft: "100px", paddingTop: "12px" }}>
        <a href="/PanelMemberAllocatedMarks">
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "80%", fontSize: "140%", marginTop: "20px", borderRadius:"50px"  }}
          >
            View Marks
          </button>
        </a>
      </div>
      <div className="navItem" style={{ paddingLeft: "100px", paddingTop: "12px" }}>
        <a href="/GetPMMarkingSchema">
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "80%", fontSize: "140%", marginTop: "20px", borderRadius:"50px"  }}
          >
            Get Marking Scheme
          </button>
        </a>
      </div>
      <div className="navItem" style={{ paddingLeft: "100px", paddingTop: "12px" }}>
        <a href="/PanelMemberMarksReport">
          <button
            type="button"
            className="btn btn-danger"
            style={{ width: "80%", fontSize: "140%", marginTop: "20px", borderRadius:"50px"  }}
          >
            Presentation Marks Report
          </button>
        </a>
      </div>
      </div> 
      <div class="PMSupportServices">
        <div class="StdSup">
          <h2 class="PMH2"> 🧑‍💻 Support Services</h2>
          <br />
          <h3><pre> 🌐 SLIIT Admin Support</pre></h3><br />
          <h4><pre>      https://Support.sliit.lk</pre></h4>
          <h3><pre> 📞 Hotline No</pre></h3><br />
          <h4><pre>      8.30 AM to 5.00 PM <br /></pre></h4>
          <h4><pre>      • 011 754 4801</pre></h4>

          <div className="navItem">
        <a href="https://chat.whatsapp.com/COcoBXUJo4812jj5QS3Nns">
          <button
            type="button"
            className="btn btn-warning"
            style={{ width: "35%", fontSize: "140%", marginTop: "80px" ,marginLeft:"125px", borderRadius:"50px" }}
          >
            <b>Chat Link</b>
          </button>
        </a>
      </div>
        </div>
      </div>

    </div>
    
  );
}
