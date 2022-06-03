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
const GetPMmark = async (req,res) => {
    const PMmarkID = req.params.id;
    try{
        const PMMark = await PanelMemberMarks.findById(PMmarkID);
        res.json(PMMark);
    } catch (error) {
        res.status(400).json(error);
    }
};


const updatePMMarks = async (req, res) => {
    const PMmarkId = req.params.id;
  
    try {
      const PMmark = await PanelMemberMarks.findById(PMmarkId);
  
      if (!PMmark) {
        return res.status(404).json("There is no presentation mark to update");
      }
  
      const {
        fName,
        subject,
        groupId,
        topic,
        marks,
        PMname,
        feedback,
      } = req.body;
  
      const updatedPMmarks = await PanelMemberMarks.findByIdAndUpdate(PMmarksId, {
        fName,
        subject,
        groupId,
        topic,
        marks,
        PMname,
        feedback,
      });
  
      res.status(200).json(updatedPMmarks);
    } catch (error) {
      res.status(400).json(error.message);
    }
  };
module.exports = {
    AddPMMarks,
    GetPMmarks,
    GetPMmark,
    updatePMMarks,
  };