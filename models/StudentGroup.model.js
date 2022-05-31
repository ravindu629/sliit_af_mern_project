const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentGroupSchema = new Schema({
  groupID:String,
  groupName:String,
  leaderITNum: String,
  leaderName: String,
  leaderEmail: String,
  member1ITNum: String,
  member1Name: String,
  member2ITNum: String,
  member2Name: String,
  member3ITNum: String,
  member3Name: String,
});

module.exports = StudentGroup = mongoose.model("StudentGroup", studentGroupSchema);