// StudentDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentDetails() {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    // Fetch student details from the server when the component mounts
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getStudentDetails');
      setStudentDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  return (
    <div>
      <h2>Student Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>StudentId</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Class</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.class}</td>
              <td>{student.gender}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;