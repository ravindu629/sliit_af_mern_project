const PMMark = require("../models/PanelMemberMarks.model");

const AddPMMarks = (req,res) =>{
    const{ fName,subject,groupId,topic,marks,PMname,feedback } =
    req.body;

    const PMMarks = new PMMark({
        fName,
        subject,
        groupId,
        topic,
        marks,
        PMname,
        feedback,
    });

    PMMarks
        .save()
        .then((createdPMMarks) =>{
            res.json(createdPMMarks);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};

//retrieve all of allocated marks
const GetPMmarks = async(req,res) => {
    try{
        const PMMark = await PanelMemberMarks.find();
        res.json(PMMark);
    }
    catch(error){
        res.status(400).json(error);
    }
};
const GetPMmark = (req,res) => {
    const groupId = req.params.id;
    try{
        const PMMark = await PanelMemberMarks.findById(groupId);
        res.json(PMMark);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    AddPMMarks,
    GetPMmarks,
    GetPMmark,
  };