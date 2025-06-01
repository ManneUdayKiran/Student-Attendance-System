import { useEffect, useState } from "react";
import axios from "axios";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/attendance/all");
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>All Students</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              ID: {student.studentId}, Name: {student.studentName}, Status:{" "}
              {student.present ? "Present" : "Absent"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;
