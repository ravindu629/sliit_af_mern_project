import React from "react";
import "../App.css";

export default function PanelMemberMenu() {
  return (
    <div style={{ paddingLeft: "400px", paddingTop: "80px" }}>
      <h2 style={{ fontWeight: "bold" }}>Panel Member Menu</h2>
      <div className="navItem">
        <a href="">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            View Topics
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/PanelMemberMarksAllocation">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            Allocate Marks
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/PanelMemberAllocatedMarks">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            View Marks
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="/PanelMemberMarkByID">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            Get Presentation Marks By Group ID
          </button>
        </a>
      </div>
      <div className="navItem">
        <a href="">
          <button
            type="button"
            className="btn btn-secondary menuBtn"
            style={{ width: "35%", fontSize: "140%", marginTop: "20px" }}
          >
            Get Marking Scheme
          </button>
        </a>
      </div>
    </div>
    
  );
}
