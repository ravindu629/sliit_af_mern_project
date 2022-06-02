const acceptTopic = require("../models/AcceptTopic.model");

const acceptResearchTopic = (req, res) => {
    const {
        groupID,
        groupName,
        leaderITNum,
        topicName,
        status,
    } = req.body;

    const acceptresearchTopic = new acceptTopic({
        groupID,
        groupName,
        leaderITNum,
        topicName,
        status,
    });

    acceptresearchTopic
        .save()
        .then((acceptResearchTopic) => {
            res.json(acceptResearchTopic);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};


//View Research Topics
const getacceptResearchTopics = async (req, res) => {
    try {
        const researchTopics = await acceptTopic.find();
        res.json(researchTopics);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    acceptResearchTopic,
    getacceptResearchTopics,
};
