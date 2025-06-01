const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: String,
  studentName: String,
  date: { type: Date, default: Date.now },
  present: Boolean
});

module.exports = mongoose.model("Attendance", attendanceSchema);
