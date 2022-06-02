
const express = require("express");
const router = express.Router();
const {
    acceptResearchTopic,
    getacceptResearchTopics,
} = require("../controllers/AcceptTopic.controller");

router.get("/", getacceptResearchTopics,);

router.post("/", acceptResearchTopic,);



module.exports = router;
