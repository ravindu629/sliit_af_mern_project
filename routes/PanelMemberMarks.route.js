const express = require("express");
const router = express.Router();
const {
    addPanelMemberMarks
} = require("../controllers/PanelMemberMarks.controller");

router.post("/PanelMemberMarksAllocations", addPanelMemberMarks);

module.exports = router;