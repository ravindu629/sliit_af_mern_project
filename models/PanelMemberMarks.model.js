const mongoose = require("mongoose");
const { Schema } = mongoose;

const PMMark = new Schema({
  fName: String,
  subject: String,
  groupId: String,
  topic: String,
  marks: Number,
  PMname: String,
  feedback: String,
});



module.exports = PanelMemberMarks = mongoose.model("PMMark", PMMark);