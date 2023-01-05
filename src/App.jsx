import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginTeacher from './pages/Login/LoginTeacher';
import LoginStudent from './pages/Login/LoginStudent';
import SignupTeacher from './pages/Login/SignupTeacher';
import SignupStudent from './pages/Login/SignupStudent';
//Teacher
import Dashboard  from './pages/Teacher/Dashboard';
import TestOutline from './pages/Teacher/TestOutline'
import TestOutlineCreate from './pages/Teacher/TestOutlineCreate';
import TestOutlineDetail from './pages/Teacher/TestOutlineDetail';
import TestOutlineBluePrint from './pages/Teacher/TestOutlineBluePrint';
import TestOutlineQuestion from './pages/Teacher/TestOutlineQuestion';
import TestOutlineViewTestForm from './pages/Teacher/TestOutlineViewTestForm';
import TestForm from './pages/Teacher/TestForm'
import TestFormDetail from './pages/Teacher/TestFormDetail';
import TestFormCreate from './pages/Teacher/TestFormCreate';
import TestFormContent from './pages/Teacher/TestFormContent';
import Question from './pages/Teacher/Question';
import QuestionCreate from './pages/Teacher/QuestionCreate';
import QuestionEdit from './pages/Teacher/QuestionEdit';
import Class from './pages/Teacher/Class';
import ClassDetail from './pages/Teacher/ClassDetail';
import ClassStudent from './pages/Teacher/ClassStudent';
import TakerManager from './pages/Teacher/TakerManager';
import TakerManagerDetail from './pages/Teacher/TakerManagerDetail';
import TakerManagerStudent from './pages/Teacher/TakerManagerStudent';
import TakerManagerCreate from './pages/Teacher/TakerManagerCreate';
import TeacherAccount from './pages/Teacher/TeacherAccount';
// Student
import StudentClass from './pages/Student/Class';
import StudentAccount from './pages/Student/StudentAccount';
import StudentTest from './pages/Student/Test';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/teacher-login' element={<LoginTeacher />} />
          <Route path='/student-login' element={<LoginStudent />} />
          <Route path='/teacher-signup' element={<SignupTeacher />} />
          <Route path='/student-signup' element={<SignupStudent />} />
          // Teacher
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/test-outline' element={<TestOutline />} />
          <Route path='/test-outline/create' element={<TestOutlineCreate />} />
          <Route path='/test-outline/detail/:id' element={<TestOutlineDetail />} />
          <Route path='/test-outline/detail/test-blueprint/:id' element={<TestOutlineBluePrint />} />
          <Route path='/test-outline/detail/question/:id' element={<TestOutlineQuestion />} />
          <Route path='/test-outline/detail/test-form/:id' element={<TestOutlineViewTestForm />} />
          <Route path='/test-form' element={<TestForm />} />
          <Route path='/test-form/detail/:id' element={<TestFormDetail />} />
          <Route path='/test-form/detail/content/:id' element={<TestFormContent />} />
          <Route path='/test-form/create' element={<TestFormCreate />} />
          <Route path='/questions' element={<Question />} />
          <Route path='/questions/create' element={<QuestionCreate />} />
          <Route path='/questions/edit/:id' element={<QuestionEdit />} />
          <Route path='/classes' element={<Class />} />
          <Route path='/classes/detail/:id' element={<ClassDetail />} />
          <Route path='/classes/detail/students/:id' element={<ClassStudent />} />
          <Route path='/taker-manager' element={<TakerManager />} />
          <Route path='/taker-manager/detail/:id' element={<TakerManagerDetail />} />
          <Route path='/taker-manager/detail/student/:id' element={<TakerManagerStudent />} />
          <Route path='/taker-manager/create' element={<TakerManagerCreate />} />      
          <Route path='/account/:id' element={<TeacherAccount />} />       
          //Student
          <Route path='/lop-hoc' element={<StudentClass />} />
          <Route path='/bai-thi' element={<StudentTest />} />
          <Route path='/tai-khoan' element={<StudentAccount />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
