const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  stdId: String,
  file: String,
  comment: String,
  faculty: String,
  gradingStatus: String,
});

module.exports = File = mongoose.model("File", fileSchema);
