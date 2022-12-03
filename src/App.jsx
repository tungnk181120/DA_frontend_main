import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import TestOutline from './pages/TestOutline'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/dashboard' element={<Home />} />
          <Route path='/test-outline' element={<TestOutline />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
