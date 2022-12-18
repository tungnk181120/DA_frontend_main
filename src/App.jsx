import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Dashboard  from './pages/Teacher/Dashboard';
import TestOutline from './pages/Teacher/TestOutline'
import TestOutlineForm from './components/Teacher/TestOutlineForm/TestOutlineForm';
import TestOutlineDetail from './pages/Teacher/TestOutlineDetail';
import TestOutlineBluePrint from './pages/Teacher/TestOutlineBluePrint';
import TestOutlineQuestion from './pages/Teacher/TestOutlineQuestion';
import TestOutlineViewTestForm from './pages/Teacher/TestOutlineViewTestForm';
import TestForm from './pages/Teacher/TestForm'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          // Teacher
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/test-outline' element={<TestOutline />} />
          <Route path='/test-outline/create' element={<TestOutlineForm />} />
          <Route path='/test-outline/detail/:id' element={<TestOutlineDetail />} />
          <Route path='/test-outline/detail/test-blueprint/:id' element={<TestOutlineBluePrint />} />
          <Route path='/test-outline/detail/question/:id' element={<TestOutlineQuestion />} />
          <Route path='/test-outline/detail/test-form/:id' element={<TestOutlineViewTestForm />} />
          <Route path='/test-form' element={<TestForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
