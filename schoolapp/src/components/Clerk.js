import React, { useState } from 'react';
import './clerk.css';
import { FaUserPlus, FaChalkboardTeacher, FaChartLine, FaUser, FaSignOutAlt } from 'react-icons/fa';
import AddStudentPage from './AddStudent';
import AddTeacherPage from './AddTeacher';
import StudentPerformPage from './StudentPermform';
import TeacherPerformPage from './TeacherPerform';
import StudentDetails from './StudenDetails';
import StudentPdetails from './StudentPdetails';

function Clerk() {
  const [currentPage, setCurrentPage] = useState(null);

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'addstudent':
        return <AddStudentPage />;
      case 'addteacher':
        return <AddTeacherPage />;
      case 'studentperform':
        return <StudentPerformPage />;
      case 'teacherperform':
        return <TeacherPerformPage />;
      case 'studentdetails':
        return <StudentDetails />;
      case 'studentpdetails':
        return <StudentPdetails />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Clerk Dashboard</h3>
        </div>
        <ul className="list-unstyled components">
          <li onClick={() => navigateToPage('addstudent')}><FaUserPlus /> Add Student</li><br/>
          <li onClick={() => navigateToPage('addteacher')}><FaChalkboardTeacher /> Add Teacher</li><br/>
          <li onClick={() => navigateToPage('studentperform')}><FaChartLine /> Add Student Performance</li><br/>
          <li onClick={() => navigateToPage('teacherperform')}><FaChartLine /> Add Teacher Performance</li><br/>
          <li onClick={() => navigateToPage('studentdetails')}><FaUser /> Student Details</li><br/>
          <li onClick={() => navigateToPage('studentpdetails')}><FaChartLine /> Student Performance</li><br/>
          <a href='/'><li><FaSignOutAlt /> Logout</li></a>
        </ul>
      </nav>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default Clerk;
