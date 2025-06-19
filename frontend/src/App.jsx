import React from 'react'
import LandingPage from './pages/LandingPage.jsx'
import { Route, Routes, Navigate } from 'react-router'
import LoginPage from './pages/LoginPage.jsx'
import DashBoard from './pages/DashBoard.jsx'
import Layout from './components/Layout.jsx'
import useAuthUser from './hooks/useAuthUser.js'
import { Toaster } from 'react-hot-toast';


export default function App() {

  const {authData, isloading, isError} = useAuthUser();

  if(isloading) return <div>Loading...</div>;

  const isAuthenticated = Boolean(authData);
  console.log(isAuthenticated);
  return (
    <div className=''>
      <Toaster />
      <Routes>
        <Route path='/' element={!isAuthenticated ? <LandingPage /> : <Navigate to="/dashboard" />} />
        <Route path='/signin' element={!isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={isAuthenticated ? <Layout><DashBoard /></Layout> : <Navigate to="/" />} />
        <Route path = "*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
