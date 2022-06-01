const mongoose = require("mongoose");
const { Schema } = mongoose;

const researchTopicSchema = new Schema({
  groupID: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  groupName: String,
  leaderITNum: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  topicName: String,
  reqSupervisor: String,
  reqCoSupervisor: String,
  status: String,
});

module.exports = StudentGroup = mongoose.model("ResearchTopic", researchTopicSchema);