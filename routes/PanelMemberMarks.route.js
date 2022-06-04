const express = require("express");
const router = express.Router();

const {
    AddPMMarks, GetPMmarks,GetPMmark,updatePMMarks,removePMMarks,
  } = require("../controllers/PanelMemberMarks.controller");
  
  
 
  router.post("/", AddPMMarks);

  router.get("/",GetPMmarks);

  router.get("/:id",GetPMmark);

  router.put("/:id", updatePMMarks);

  router.delete("/:id", removePMMarks);
  
  

  module.exports = router;
  