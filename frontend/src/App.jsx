import React from 'react'
import LandingPage from './pages/LandingPage.jsx'
import { Route, Routes } from 'react-router'
export default function App() {
  return (
    <div className=''>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}
