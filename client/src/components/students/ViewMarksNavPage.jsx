import React from "react";
import "../App.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

  export default function ViewMarksNavPage() {
    return (
      <div className="ViewMarksMenu">
        <div className="admMenu">
          <h2 style={{ fontWeight: "bold" }}>View Marks Menu</h2><br/>
          
          <div className="navItem">
            <a href="/ViewDocumentMarks">
              <button type="button" className="ViewMarkNavButton button5">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Document Marks
              </button>
            </a>
          </div>

          <div className="navItem">
            <a href="/addAdmin">
              <button type="button" className="ViewMarkNavButton button5">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Add a new Admin
              </button>
            </a>
          </div>
          
        </div>
      </div>
    );
  }
  

