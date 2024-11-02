
export default function StudentDetails({ goBack, student }) {
  return (
    <div className="student-details-card">
      <h2>Student Details</h2>
      <div className="student-info">
        <p><strong>Student ID:</strong> {student?.id}</p>
        <p><strong>Name:</strong> {student?.name}</p>
        <p><strong>Semester:</strong> {student?.semester}</p>
        <p><strong>Enrollment No:</strong> {student?.enrollmentNo}</p>
      </div>
      <button className="back-button" onClick={goBack}>Back</button>
    </div>
  );
}
