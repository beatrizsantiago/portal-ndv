import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}