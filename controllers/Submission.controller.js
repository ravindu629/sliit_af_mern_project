const Submission = require("../models/Submission.model");

const addSubmission = (req, res) => {
  const { faculty, dueDate, gradingStatus } = req.body;

  const sub = new Submission({
    faculty,
    dueDate,
    gradingStatus,
  });

  sub
    .save()
    .then((createdSub) => {
      res.json(createdSub);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getSubmissions = async (req, res) => {
  try {
    const subs = await Submission.find();
    res.json(subs);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getSubmission = async (req, res) => {
  const subId = req.params.id;

  try {
    const sub = await Submission.findById(subId);
    res.json(sub);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateSubmission = async (req, res) => {
  const subId = req.params.id;

  try {
    const sub = await Submission.findById(subId);

    if (!sub) {
      return res.status(404).json("There is no submission to update");
    }

    const { faculty, dueDate, gradingStatus } = req.body;

    const updatedSub = await Submission.findByIdAndUpdate(subId, {
      faculty,
      dueDate,
      gradingStatus,
    });

    res.status(200).json(updatedSub);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeSubmission = async (req, res) => {
  const subId = req.params.id;

  try {
    const sub = await Submission.findById(subId);

    if (!sub) {
      return res.status(404).json("There is no submission to remove");
    }

    const removedSub = await Submission.findByIdAndDelete(subId);
    res.status(200).json(removedSub);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  addSubmission,
  getSubmissions,
  getSubmission,
  updateSubmission,
  removeSubmission,
};
