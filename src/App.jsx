import AttendanceForm from "./components/AttendanceForm";
import AttendanceViewer from "./components/AttendanceViewer";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div>
      <h1>📚 Student Attendance System</h1>
      <AttendanceForm />
      <hr />
      <AttendanceViewer />
      <hr />
      <StudentList/>
    </div>
  );
}

export default App;
