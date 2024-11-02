import  { useState } from "react";
import StudentTable from "./StudentTable.jsx";
import StudentDetails from "./StudentDetails.jsx";
import './App.css'


export default function App() {
  const [view, setView] = useState("table");
  const [student, setStudent] = useState(null);

  const selectStudent = (student) => {
    setStudent(student);
    setView("details");
  };

  const handleBack = () => {
    setView("table");
  };

  return (
    <div>
      <h1>Student Scoreboard</h1>
      {view === "table" ? (
        <StudentTable selectStudent={selectStudent} />
      ) : (
        <StudentDetails goBack={handleBack} student={student} />
      )}
    </div>
  );
}
