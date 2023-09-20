// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "8977774740",
  database: "school"
});

app.post('/Login', (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "An error occurred" });
      } else {
        if (result.length > 0) {
          const userRole = result[0].role;
          res.json({ username: userRole, message: `${userRole} logged in successfully` });
        } else {
          res.status(401).json({ message: "Invalid username or password" });
        }
      }
    }
  );
});

app.post('/api/addStudent', (req, res) => {
  const formData = req.body;

  const sql = 'INSERT INTO students (firstName, lastName, class, gender, address) VALUES (?, ?, ?, ?, ?)';
  const values = [
    formData.firstName,
    formData.lastName,
    formData.class,
    formData.gender,
    formData.address
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error adding student' });
    } else {
      res.json({ message: 'Student added successfully' });
    }
  });
});

app.get('/api/getStudentDetails', (req, res) => {
  console.log('Fetching student details...');
  db.query('SELECT * FROM students', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching student details' });
    } else {
      console.log('Student details fetched successfully.');
      res.json(results);
    }
  });
});

app.post('/api/addTeacher', (req, res) => {
  const formData = req.body;

  db.query('INSERT INTO teachers SET ?', formData, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error inserting data' });
      return;
    }
    res.json({ message: 'Data inserted successfully' });
  });
});

app.get('/api/getTeacherDetails', (req, res) => {
  console.log('Fetching teacher details...');
  db.query('SELECT DISTINCT * FROM teachers', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching teacher details' });
    } else {
      console.log('Teacher details fetched successfully.');
      res.json(results);
    }
  });
});

app.post('/student-performance', (req, res) => {
  const { studentId, subject, marks, grade } = req.body;
  const query = 'INSERT INTO StudentPerform (studentId, subject, marks, grade) VALUES (?, ?, ?, ?)';
  db.query(query, [studentId, subject, marks, grade], (err, result) => {
      if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'An error occurred' });
      } else {
          res.json({ message: 'Data inserted successfully' });
      }
  });
});

// GET method to retrieve student performance
app.get('/student-performance', (req, res) => {
  const query = `
      SELECT
          s.id,
          s.firstName,
          s.lastName,
          sp.subject,
          sp.marks,
          sp.grade
      FROM
          students s
      JOIN
          StudentPerform sp ON s.id = sp.studentId;
  `;
  db.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching data:', err);
          res.status(500).json({ error: 'An error occurred' });
      } else {
          res.json(results);
      }
  });
});

app.post('/teacher-performance', (req, res) => {
  const { teacherId, subject, performance, feedback } = req.body;
  const query = 'INSERT INTO teacherperform (teacherId, subject, performance, feedback) VALUES (?, ?, ?, ?)';
  db.query(query, [teacherId, subject, performance, feedback], (err, result) => {
      if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'An error occurred' });
      } else {
          res.json({ message: 'Data inserted successfully' });
      }
  });
});

// GET method to retrieve student performance
app.get('/teacher-performance', (req, res) => {
  const query = `
      SELECT
          t.id,
          t.firstName,
          t.lastName,
          tp.subject,
          tp.performance,
          tp.feedback
      FROM
          teachers t
      JOIN
          teacherperform tp ON t.id = tp.teacherId;
  `;
  db.query(query, (err, results) => {
      if (err) {
          console.error('Error fetching data:', err);
          res.status(500).json({ error: 'An error occurred' });
      } else {
          res.json(results);
      }
  });
});


app.listen(4000, () => {
  console.log("Running backend server");
});
