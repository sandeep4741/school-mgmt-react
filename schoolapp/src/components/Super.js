import React,{useState} from 'react';
import './super.css'; // Import the CSS file
import { FaUser, FaChartLine, FaChalkboardTeacher, FaSignOutAlt } from 'react-icons/fa';
import StudentDetails from './StudenDetails';
import StudentPdetails from './StudentPdetails';
import TeacherDetails from './TeacherDetails';

function Super() {
  const [currentPage, setCurrentPage] = useState(null);

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'studentdetails':
        return <StudentDetails />;
      case 'studentpdetails':
        return <StudentPdetails />;
      case 'teacherdetails':
        return <TeacherDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <nav className="sidebar">
        <div className="sidebar-header">
          <h3>Superintendent</h3>
        </div>
        <ul className="list-unstyled components">
          <li onClick={() => navigateToPage('studentdetails')}><FaUser /> Student Details</li><br/>
          <li onClick={() => navigateToPage('studentpdetails')}><FaChartLine /> Student Performance</li><br/>
          <li onClick={() => navigateToPage('teacherdetails')}><FaChalkboardTeacher /> Teacher Details</li><br/>
          <li><a href="/"><FaSignOutAlt /> Logout</a></li>
        </ul>
      </nav>
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
}

export default Super;
