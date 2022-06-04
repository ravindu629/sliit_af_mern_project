const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  fName: String,
  lName: String,
  studentId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  faculty: String,
  nic: String,
  phoneNumber: Number,
  email: String,
  password: String,
});

module.exports = Student = mongoose.model("Student", studentSchema);
