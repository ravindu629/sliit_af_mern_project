const PMMark = require("../models/PanelMemberMarks.model");

//allocate mark
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
//get a mark by id
const GetPMmark = async (req,res) => {
    const PMmarkID = req.params.id;
    try{
        const PMMark = await PanelMemberMarks.findById(PMmarkID);
        res.json(PMMark);
    } catch (error) {
        res.status(400).json(error);
    }
};

//update 
const updatePMMarks = async (req, res) => {
  const PMmarkId = req.params.id;

  try {
    const PMmarks = await PanelMemberMarks.findById(PMmarkId);

    if (!PMmarks) {
      return res.status(404).json("There is no student to update");
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

    const updatedPMMarks = await PanelMemberMarks.findByIdAndUpdate(PMmarkId, {
      fName,
      subject,
      groupId,
      topic,
      marks,
      PMname,
      feedback,
    });

    res.status(200).json(updatedPMMarks);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// remove marks
const removePMMarks = async (req, res) => {
  const  PMmarksId= req.params.id;

  try {
    const PMmarks = await  PanelMemberMarks.findById(PMmarksId);

    if (!PMmarks) {
      return res.status(404).json("There is no marks to remove");
    }

    const removedPMmarks = await PanelMemberMarks.findByIdAndDelete(PMmarksId);
    res.status(200).json( removedPMmarks);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
    AddPMMarks,
    GetPMmarks,
    GetPMmark,
    updatePMMarks,
    removePMMarks,
  };