const express = require("express");
const router = express.Router();
const {
    addResearchTopic,
    getResearchTopics,
    getResearchTopic,
    updateResearchTopic,
    removeResearchTopic,
} = require("../controllers/ResearchTopic.controller");

router.get("/", getResearchTopics);

router.get("/:id", getResearchTopic);

router.post("/", addResearchTopic);

router.put("/:id", updateResearchTopic);

router.delete("/:id", removeResearchTopic);

module.exports = router;
