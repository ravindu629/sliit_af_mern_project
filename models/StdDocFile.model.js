const mongoose = require("mongoose");
const { Schema } = mongoose;

const stdDocfileSchema = new Schema({
    groupID: String,
    groupName: String,
    leaderITNum: String,
    stdDocfile: String,

});

module.exports = StdDocFile = mongoose.model("stdDocFile", stdDocfileSchema);