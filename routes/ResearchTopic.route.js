const express = require("express");
const router = express.Router();
const {
    addResearchTopic,
    getRresearchTopics,
    getResearchTopic,
    updateResearchTopic,
    removeResearchTopic,
} = require("../controllers/ResearchTopic.controller");

router.get("/", getRresearchTopics);

router.get("/:id", getResearchTopic);

router.post("/", addResearchTopic);

router.put("/:id", updateResearchTopic);

router.delete("/:id", removeResearchTopic);

module.exports = router;
