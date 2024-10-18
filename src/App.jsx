
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Auth from './pages/Auth'
import CoursePage from './pages/CoursePage'
import UserDashboard from './pages/UserDashboard'
import InstructorPage from './pages/InstructorPage'
import SelectedClasses from './dashboard/SelectedClasses'
import EnrolledClass from './dashboard/EnrolledClass'
import Contact from './pages/Contact'
import Payment from './dashboard/Payment'


function App() {

  return (
    <>
  
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register={'register'}/> }/>
        {/* <Route path='/About' element={<About/>}/> */}
        <Route path='/Instructors' element={<InstructorPage/>}/>
        <Route path='/Courses' element={<CoursePage/>}/>
        <Route path='/UserDashboard' element={<UserDashboard/>}/>
        <Route path='/EnrolledClass' element={<EnrolledClass/>}/>
        <Route path='/SelectedClasses' element={<SelectedClasses/>}/>
        <Route path='/ContactUs' element={<Contact/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
     
    </>
  )
}

export default App
