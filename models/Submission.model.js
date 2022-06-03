const mongoose = require("mongoose");
const { Schema } = mongoose;

const subSchema = new Schema({
  faculty: String,
  dueDate: String,
  gradingStatus: String,
});

module.exports = Submission = mongoose.model("Submission", subSchema);
