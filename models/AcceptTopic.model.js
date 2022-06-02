const mongoose = require("mongoose");
const { Schema } = mongoose;

const acceptTopicSchema = new Schema({
  groupID: String,
  groupName: String,
  leaderITNum: String,
  topicName: String,
  status: String,
});

module.exports = acceptTopic= mongoose.model("acceptTopic", acceptTopicSchema);