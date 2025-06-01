import { useState } from "react";
import axios from "axios";

const AttendanceForm = () => {
  const [form, setForm] = useState({
    studentId: "",
    studentName: "",
    present: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://student-attendance-system-backend-ju7b.onrender.com/api/attendance/add", form);
    alert("Attendance recorded!");
    setForm({ studentId: "", studentName: "", present: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Student ID"
        value={form.studentId}
        required
        onChange={(e) => setForm({ ...form, studentId: e.target.value })}
      />
      <input
        placeholder="Student Name"
        required
        value={form.studentName}
        onChange={(e) => setForm({ ...form, studentName: e.target.value })}
      />
      <select
        value={form.present.toString()}
        onChange={(e) =>
          setForm({ ...form, present: e.target.value === "true" })
        }
      >
        <option value="true">Present</option>
        <option value="false">Absent</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AttendanceForm;
