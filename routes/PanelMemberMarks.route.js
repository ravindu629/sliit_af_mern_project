const express = require("express");
const router = express.Router();

const {
    AddPMMarks, GetPMmarks,GetPMmark, 
  } = require("../controllers/PanelMemberMarks.controller");
  
  
 
  router.post("/", AddPMMarks);
  router.get("/",GetPMmarks);
  router.get("/:id",GetPMmark);
  
  

  module.exports = router;
  