const ResearchTopic = require("../models/ResearchTopic.model");

const addResearchTopic = (req, res) => {
    const {
        groupID,
        groupName,
        leaderITNum,
        topicName,
        reqSupervisor,
        reqCoSupervisor,
    } = req.body;

    const researchTopic = new ResearchTopic({
        groupID,
        groupName,
        leaderITNum,
        topicName,
        reqSupervisor,
        reqCoSupervisor,
    });

    researchTopic
        .save()
        .then((createdResearchTopic) => {
            res.json(createdResearchTopic);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};


//View Research Topics
const getResearchTopics = async (req, res) => {
    try {
        const researchTopics = await ResearchTopic.find();
        res.json(researchTopics);
    } catch (error) {
        res.status(400).json(error);
    }
};

//View unique Research Topic
const getResearchTopic = async (req, res) => {
    const ResarchTopicID = req.params.id;

    try {
        const researchTopic = await ResearchTopic.findById(ResarchTopicID);
        res.json(researchTopic);
    } catch (error) {
        res.status(400).json(error);
    }
};

//Update Research Topic
const updateResearchTopic = async (req, res) => {
    const ResarchTopicID = req.params.id;

    try {
        const topic = await ResearchTopic.findById(ResarchTopicID);

        if (!topic) {
            return res.status(404).json("There is no that Research Topic for update");
        }

        const {
            groupID,
            groupName,
            leaderITNum,
            topicName,
            reqSupervisor,
            reqCoSupervisor,
        } = req.body;

        const updatedResearchTopic = await ResearchTopic.findByIdAndUpdate(ResarchTopicID, {
            groupID,
            groupName,
            leaderITNum,
            topicName,
            reqSupervisor,
            reqCoSupervisor,
        });

        res.status(200).json(updatedResearchTopic);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//Delete Student Group
const removeResearchTopic = async (req, res) => {
    const ResarchTopicID = req.params.id;

    try {
        const topic = await ResearchTopic.findById(ResarchTopicID);

        if (!topic) {
            return res.status(404).json("There is no such a research topic to delete");
        }

        const removedResearchTopic = await ResearchTopic.findByIdAndDelete(ResarchTopicID);
        res.status(200).json(removedResearchTopic);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    addResearchTopic,
    getResearchTopics,
    getResearchTopic,
    updateResearchTopic,
    removeResearchTopic,
};
