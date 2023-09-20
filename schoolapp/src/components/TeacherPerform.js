import React, { useState } from 'react';
import './TeacherPerform.css'; 
import axios from 'axios';

function TeacherPerform() {
  const [formData, setFormData] = useState({
    teacherId: '',
    subject: '',
    performance: '',
    feedback: '',
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);


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
      const response = await axios.post('http://localhost:4000/teacher-performance', formData);

      console.log(response.data);
      setSubmissionSuccess(true);
      setFormData({
        teacherId: '',
        subject: '',
        performance: '',
        feedback: '',
      });
    } catch (error) {
      console.error(error);
    }
    console.log(formData)
  };

  return (
    <div className="form-container" style={{'margin-top':'45px'}}>
      <h2>Teacher Performance Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Teacher ID:</label>
          <input
            type="text"
            name="teacherId"
            value={formData.teacherId}
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
          <label>Performance:</label>
          <input
            type="text"
            name="performance"
            value={formData.performance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Feedback:</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submissionSuccess && (
        <div className="success-message">
          Teacher performance details submitted successfully.
        </div>
      )}
    </div>
  );
}

export default TeacherPerform;
