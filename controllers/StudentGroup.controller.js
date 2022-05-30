const Student = require("../models/StudentGroup.model");


const addStudentGroup = (req, res) => {
    const {
        groupID,
        groupName,
        leaderEmail,
        leaderITNum,
        leaderName,
        member1ITNum,
        member1Name,
        member2ITNum,
        member2Name,
        member3ITNum,
        member3Name,
    } = req.body;

    const studentGroup = new StudentGroup({
        groupID,
        groupName,
        leaderEmail,
        leaderITNum,
        leaderName,
        member1ITNum,
        member1Name,
        member2ITNum,
        member2Name,
        member3ITNum,
        member3Name,
    });

    studentGroup
        .save()
        .then((createdStudentGroup) => {
            res.json(createdStudentGroup);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

//View Student Group
const getStudentGroups = async (req, res) => {
    try {
        const studentGroups = await StudentGroups.find();
        res.json(studentGroups);
    } catch (error) {
        res.status(400).json(error);
    }
};

//View unique student group
const getStudentGroup = async (req, res) => {
    const groupID = req.params.id;

    try {
        const studentGroup = await StudentGroup.findById(groupID);
        res.json(studentGroup);
    } catch (error) {
        res.status(400).json(error);
    }
};

//Update Student Group
const updateStudentGroup = async (req, res) => {
    const groupID = req.params.id;

    try {
        const group = await StudentGroup.findById(groupID);

        if (!group) {
            return res.status(404).json("There is no that group to update");
        }

        const {
            groupID,
            groupName,
            leaderEmail,
            leaderITNum,
            leaderName,
            member1ITNum,
            member1Name,
            member2ITNum,
            member2Name,
            member3ITNum,
            member3Name,
        } = req.body;

        const updatedGroup = await StudentGroup.findByIdAndUpdate(groupID, {
            groupID,
            groupName,
            leaderEmail,
            leaderITNum,
            leaderName,
            member1ITNum,
            member1Name,
            member2ITNum,
            member2Name,
            member3ITNum,
            member3Name,
        });

        res.status(200).json(updatedGroup);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//Delete Student Group
const removeStudentGroup = async (req, res) => {
    const groupID = req.params.id;

    try {
        const group = await StudentGroup.findById(groupID);

        if (!group) {
            return res.status(404).json("There is no such a group to delete");
        }

        const removedGroup = await StudentGroup.findByIdAndDelete(groupID);
        res.status(200).json(removedGroup);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

/*
const validateStudent = async (req, res) => {
    const stdId = req.body.studentId;
    const pass = req.body.password;

    try {
        const foundUser = await Student.findOne({ studentId: stdId });

        if (!foundUser) {
            return res.status(404).json("invalid user");
        } else if (foundUser.password === pass) {
            return res.status(200).json(true);
        } else {
            return res.status(404).json("incorrect password");
        }
    } catch (error) {
        res.status(400).json(error);
    }
};*/

module.exports = {
    addStudentGroup,
    getStudentGroups,
    getStudentGroup,
    updateStudentGroup,
    removeStudentGroup,
    /*validateStudent,*/
};
