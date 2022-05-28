const mongoose = require("mongoose");
const { Schema } = mongoose;

const subjectDetails = new Schema({
  subjectName: String,
  subjectID: String
});

module.exports = Student = mongoose.model("Subject", subjectDetails);