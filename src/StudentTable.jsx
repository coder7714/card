

export default function StudentTable({ selectStudent }) {
  const students = [
    { id: 1, name: "Morty", semester: "2nd", enrollmentNo: "653165" },
    { id: 2, name: "Rick", semester: "5th", enrollmentNo: "4852465" },
    { id: 3, name: "harry", semester: "8th", enrollmentNo: "775221" },
  ];

  return (
    <div className="table-container">
      <h2>Student Table</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Semester</th>
            <th>Enrollment No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.semester}</td>
              <td>{student.enrollmentNo}</td>
              <td>
                <button className="view-button" onClick={() => selectStudent(student)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
