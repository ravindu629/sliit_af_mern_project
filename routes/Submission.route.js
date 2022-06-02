const express = require("express");
const router = express.Router();
const {
  addSubmission,
  getSubmissions,
  getSubmission,
  updateSubmission,
  removeSubmission,
} = require("../controllers/Submission.controller");

router.get("/", getSubmissions);

router.get("/:id", getSubmission);

router.post("/", addSubmission);

router.put("/:id", updateSubmission);

router.delete("/:id", removeSubmission);

module.exports = router;
