const express = require("express");
const router = express.Router();

const {
    addMarks, getMarks,
   
   
  } = require("../controllers/SupervisorMarks.controller");
  
  
  router.get("/", getMarks);
  router.post("/", addMarks);
  
  
  module.exports = router;
  