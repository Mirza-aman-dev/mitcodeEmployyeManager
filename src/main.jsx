import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import EmployeeCard from './EmployeeCard.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import EmployeeDataEntry from './EmployeeDataEntry.jsx'
import JobPost from './JobPost.jsx'
import ThankYouPage from './ThankYouPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path='/' />
        <Route element={<EmployeeCard />} path='/e-Card/:empName/:empPhone/:empEmail/:DocId' />
        <Route element={<EmployeeDataEntry />} path='/apply-for-sales' />
        <Route element={<JobPost />} path='/job-sales' />
        <Route element={<ThankYouPage />} path='/join' />
        </Routes>
    </Router>
  </StrictMode>,
)
