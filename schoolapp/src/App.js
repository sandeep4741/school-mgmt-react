import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Clerk from './components/Clerk';
import Super from './components/Super';
import Principal from './components/Principal';
import AddStudent from './components/AddStudent';
import AddTeacher from './components/AddTeacher';
import StudentPerform from './components/StudentPermform';
import TeacherPerform from './components/TeacherPerform';


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Clerk" element={<Clerk />} />
              <Route path="/Principal" element={<Principal />} />
              <Route path="/Super" element={<Super />} />
              <Route path="/addstudent" element={<AddStudent />} />
              <Route path="/addteacher" element={<AddTeacher />} />
              <Route path="/studentperform" element={<StudentPerform />} />
              <Route path="/teacherperform" element={<TeacherPerform />} />
          </Routes>
      </Router>
  );
}

export default App;