import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import image from "../images/admin.jpg";

export default function AdminMenu() {
  const location = useLocation();

  const [admin, setAdmin] = useState({
    fName: "",
    lName: "",
    adminId: "",
    nic: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    function getAdmin() {
      axios
        .get("http://localhost:5000/api/admins/" + location.state.admId)
        .then((res) => {
          setAdmin(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAdmin();
  }, []);

  return (
    <div>
      <div className="adminMenu">
        <div className="admMenu">
          <h2 style={{ fontWeight: "bold" }}>Admin Menu</h2>
          <div className="navItem">
            <a href="/manageUsers">
              <button type="button" className="btn btn-secondary menuBtn">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Manage Users
              </button>
            </a>
          </div>
          <div className="navItem">
            <a href="/addAdmin">
              <button type="button" className="btn btn-secondary menuBtn">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Add a new Admin
              </button>
            </a>
          </div>
          <div className="navItem">
            <a href="">
              <button type="button" className="btn btn-secondary menuBtn">
                <ArrowCircleRightIcon />
                &nbsp;&nbsp;&nbsp;&nbsp; Create submission types
              </button>
            </a>
          </div>
          <div className="navItem">
            <a href="">
              <button type="button" className="btn btn-secondary menuBtn">
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
            width: "20%",
            position: "relative",
            marginTop: "-420px",
            marginLeft: "55%",
          }}
        >
          <img className="bgImg" src={image} />
          <div
            style={{
              paddingLeft: "120px",
              marginTop: "15px",
              fontSize: "120%",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            <p>{admin.adminId}</p>

            <p>
              {admin.fName} {admin.lName}
            </p>
            <p>{admin.email}</p>
            <p>{admin.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
