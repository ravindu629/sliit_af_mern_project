const StudentGroups = require("../models/ResearchTopic.model");

const addResearchTopic = (req, res) => {
    const {
        groupID,
        leaderITNum,
        topicName,
        reqSupervisor,
        reqCoSupervisor,
    } = req.body;

    const researchTopic = new ResearchTopic({
        groupID,
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
const getRresearchTopics = async (req, res) => {
    try {
        const researchTopics = await ResearchTopics.find();
        res.json(researchTopics);
    } catch (error) {
        res.status(400).json(error);
    }
};

//View unique Research Topic
const getResearchTopic = async (req, res) => {
    const ThegroupID = req.params.id;

    try {
        const researchTopic = await ResearchTopic.findById(ThegroupID);
        res.json(researchTopic);
    } catch (error) {
        res.status(400).json(error);
    }
};

//Update Student Group
const updateResearchTopic = async (req, res) => {
    const ThegroupID = req.params.id;

    try {
        const topic = await ResearchTopic.findById(ThegroupID);

        if (!topic) {
            return res.status(404).json("There is no that Research Topic for update");
        }

        const {
            groupID,
            leaderITNum,
            topicName,
            reqSupervisor,
            reqCoSupervisor,
        } = req.body;

        const updatedResearchTopic = await ResearchTopic.findByIdAndUpdate(ThegroupID, {
            groupID,
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
    const ThegroupID = req.params.id;

    try {
        const topic = await ResearchTopic.findById(ThegroupID);

        if (!topic) {
            return res.status(404).json("There is no such a research topic to delete");
        }

        const removedResearchTopic = await ResearchTopic.findByIdAndDelete(ThegroupID);
        res.status(200).json(removedResearchTopic);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

module.exports = {
    addResearchTopic,
    getRresearchTopics,
    getResearchTopic,
    updateResearchTopic,
    removeResearchTopic,
};
