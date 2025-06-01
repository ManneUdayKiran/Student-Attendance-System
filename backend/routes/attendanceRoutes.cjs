const express = require("express");
const router = express.Router();
const Attendance = require("../models/Attendance.cjs");

// Add Attendance
router.post("/add", async (req, res) => {
  const newAttendance = new Attendance(req.body);
  const saved = await newAttendance.save();
  res.json(saved);
});

router.get("/all", async (req, res) => {
  const records = await Attendance.find();
  res.json(records);
});

// Get All Attendance
router.get("/", async (req, res) => {
  const records = await Attendance.find();
  res.json(records);
});

// Get Student's Attendance
router.get("/student/:id", async (req, res) => {
  const records = await Attendance.find({ studentId: req.params.id });
  res.json(records);
});

module.exports=router