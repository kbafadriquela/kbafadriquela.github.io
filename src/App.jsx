import React from 'react'
import Home from './components/Home'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import { Route, Routes } from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
      </div>
    </>
  )
}