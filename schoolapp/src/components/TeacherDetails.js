// TeacherDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TeacherDetails() {
  const [teacherDetails, setTeacherDetails] = useState([]);

  useEffect(() => {
    // Fetch teacher details from the server when the component mounts
    fetchTeacherDetails();
  }, []);

  const fetchTeacherDetails = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/getTeacherDetails');
      setTeacherDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Teacher Details</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>TeacherId</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Subject</th>
            <th>Gender</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {teacherDetails.map((teacher) => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.gender}</td>
              <td>{teacher.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDetails;
