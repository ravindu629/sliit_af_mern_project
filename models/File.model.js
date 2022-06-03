const mongoose = require("mongoose");
const { Schema } = mongoose;

const fileSchema = new Schema({
  fName: String,
  photo: String,
});

module.exports = File = mongoose.model("File", fileSchema);
