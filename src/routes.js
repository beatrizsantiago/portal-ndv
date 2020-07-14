import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Integration from './pages/Integration'
import RegisterVisitant from './pages/RegisterVisitant'
import ManageIntegrators from './pages/ManageIntegrators'
import Lifes from './pages/Lifes'
import DetailsLife from './pages/DetailsLife'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/integration/register" element={<RegisterVisitant />} />
            <Route path="/integration/integrators" element={<ManageIntegrators />} />
            <Route path="/integration/lifes" element={<Lifes />} />
            <Route path="/integration/lifes/details" element={<DetailsLife />} />
        </Routes>
    )
}