const PanelMemberMarks = require("../models/PanelMemberMarks.model");

const addPanelMemberMarks = (req,res) =>{
    const{ fName,subject,groupId,topic,marks,PMname,feedback } =
    req.body;

    const panelMemberMarks = new panelMemberMark({
        fName,
        subject,
        groupId,
        topic,
        marks,
        PMname,
        feedback,
    });

    panelMemberMarks
        .save()
        .then((createdPanelMemberMark) =>{
            res.json(createdPanelMemberMark);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

module.exports = {
    addPanelMemberMarks
  };