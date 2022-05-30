const express = require("express");
const router = express.Router();

const {
    addMarks, getMarks, updateMarks,getMark, removeMarks
   
   
  } = require("../controllers/SupervisorMarks.controller");
  
  
  router.get("/", getMarks);
  router.post("/", addMarks);
  router.put("/:id", updateMarks);
  router.get("/:id", getMark);
  router.delete("/:id", removeMarks);
  
  


  
  
  module.exports = router;
  