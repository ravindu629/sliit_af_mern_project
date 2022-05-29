import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function allMarks(){

    useEffect(() => {
        function getUsers() {
          axios
            .get("http://localhost:5000/api/addMarks")
            .then((res) => {
              setUsers(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getUsers();
      }, []);




}

export default allMarks;