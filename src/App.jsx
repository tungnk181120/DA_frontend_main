import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import TestOutline from './pages/Teacher/TestOutline'
import TestForm from './pages/Teacher/TestForm'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          // Teacher
          <Route path='/test-outline' element={<TestOutline />} />
          <Route path='/test-form' element={<TestForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
