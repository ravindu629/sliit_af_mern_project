const SupervisorMarks = require("../models/SupervisorMarks.model");

//add marks
const addMarks = (req, res) => {
    const {
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
    } = req.body;
  
    const supMarks = new SupervisorMarks({
        fName,
        subject,
        groupId,
        topic,
        marks,
        sName,
        feedback,
    });
  
    supMarks
      .save()
      .then((AddMarks) => {
        res.json(AddMarks);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };

  //Get the all of allocated marks
  const getMarks = async (req, res) => {
    try {
      const supermarks  = await supMarks .find();
      res.json(supermarks);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  



  module.exports = {
    addMarks,
    getMarks,
    
  };
  