import React from 'react';
import EmployeeCard from './EmployeeCard';
import man from './man.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import JobPost from './JobPost';

const employeeData = {
  name: 'John Doe',
  phone: '+1234567890',
  email: 'johndoe@example.com',
  photo: man, // Placeholder image
};

function App() {
  const { classNamee, classTeacher } = useParams();
  return (
    <div className="App">
      <JobPost/>
    </div>
  );
}

export default App;
