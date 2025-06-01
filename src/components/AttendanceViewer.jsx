import { useState } from "react";
import axios from "axios";

const AttendanceViewer = () => {
  const [studentId, setStudentId] = useState("");
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    const res = await axios.get(`https://student-attendance-system-backend-ju7b.onrender.com/api/attendance/student/${studentId}`);
    setRecords(res.data);
  };

  return (
    <div>
      <input placeholder="Enter Student ID" onChange={(e) => setStudentId(e.target.value)} />
      <button onClick={fetchAttendance}>View Attendance</button>
      <ul>
        {records.map((r, i) => (
          <li key={i}>{r.date.slice(0, 10)} - {r.present ? "Present" : "Absent"}</li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceViewer;
