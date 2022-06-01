const express = require("express");
const router = express.Router();
const {
  addMarkingSchema,
  getMarkingSchemas,
  updateMarkingSchema,
  removeMarkingSchema,
} = require("../controllers/MarkingSchema.contoller");

router.get("/", getMarkingSchemas);

router.post("/", addMarkingSchema);

router.put("/:id", updateMarkingSchema);

router.delete("/:id", removeMarkingSchema);

module.exports = router;
