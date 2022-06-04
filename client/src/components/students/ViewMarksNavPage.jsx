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
                &nbsp;&nbsp; Document Marks
              </button>
            </a>
          </div>

          <div className="navItem">
            <a href="/StdViewPanelMemberAllocatedMarks">
              <button type="button" className="ViewMarkNavButton button5">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp; Presentation Marks
              </button>
            </a>
          </div>
          
        </div>
      </div>
    );
  }
  

