import React from 'react'
import { Routes, Route } from "react-router-dom"
import SigninPage from './components/SigninPage/SigninPage';

function Router() {
  return (
    <Routes>
    <Route path='/signin' element={<SigninPage/>}/>
  </Routes>
  )
}

export default Router;