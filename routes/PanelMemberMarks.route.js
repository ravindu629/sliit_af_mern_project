const express = require("express");
const router = express.Router();

const {
    AddPMMarks, GetPMmarks,GetPMmark,updatePMMarks
  } = require("../controllers/PanelMemberMarks.controller");
  
  
 
  router.post("/", AddPMMarks);
  router.get("/",GetPMmarks);
  router.get("/:id",GetPMmark);
  router.put("/:id", updatePMMarks);
  
  

  module.exports = router;
  