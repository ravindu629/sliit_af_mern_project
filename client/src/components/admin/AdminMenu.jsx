import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import image from "../images/admin.jpg";

export default function AdminMenu() {
  const location = useLocation();

  return (
    <div>
      <div className="adminMenu">
        <div className="admMenu">
          <h2 style={{ fontWeight: "bold" }}>Admin Menu</h2>
          <div className="navItem">
            <a href="/manageUsers">
              <button type="button" className="btn btn-outline-primary menuBtn">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Manage Users
              </button>
            </a>
          </div>
          <div className="navItem">
            <a href="/addAdmin">
              <button type="button" className="btn btn-outline-primary menuBtn">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Add a new Admin
              </button>
            </a>
          </div>
          <div className="navItem">
            <a href="/submission">
              <button type="button" className="btn btn-outline-primary menuBtn">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Create submission types
              </button>
            </a>
          </div>
          <div className="navItem">
            <a href="/createMarking">
              <button type="button" className="btn btn-outline-primary menuBtn">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Create marking schemes
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <div
          style={{
            width: "25%",
            position: "relative",
            marginTop: "-420px",
            marginLeft: "50%",
          }}
        >
          <img className="bgImg" src={image} />
        </div>
      </div>
    </div>
  );
}
