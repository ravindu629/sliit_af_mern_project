const mongoose = require("mongoose");
const { Schema } = mongoose;

const staffSchema = new Schema({
  fName: String,
  lName: String,
  staffId: String,
  faculty: String,
  nic: String,
  phoneNumber: Number,
  email: String,
  password: String,
});

module.exports = Staff = mongoose.model("Staff", staffSchema);
