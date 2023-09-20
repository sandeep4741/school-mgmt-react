import React, { useState } from 'react';
import './AddTeacher.css';
import axios from 'axios';

function AddTeacher() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    gender: '',
    address: '',
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/addTeacher', formData);

      console.log(response.data);
      setRegistrationSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        subject: '',
        gender: '',
        address: '',
      });
    } catch (error) {
      console.error(error);
    }
    console.log(formData)
  };

  return (
    <div className="form-container" style={{'margin-top':'30px'}}>
      <h2>Add Teacher Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Add Teacher</button>
      </form>
      {registrationSuccess && (
        <div className="success-message">
          Teacher details added successfully.
        </div>
      )}
    </div>
  );
}

export default AddTeacher;
