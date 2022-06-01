const mongoose = require("mongoose");
const { Schema } = mongoose;

const markingSchema = new Schema({
  faculty: String,
  criteria: String,
  desc: String,
  marks: String,
});

module.exports = MarkingSchema = mongoose.model("MarkingSchema", markingSchema);
