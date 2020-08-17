import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'
import Integration from './pages/Integration'
import RegisterVisitant from './pages/RegisterVisitant'
import ManageIntegrators from './pages/ManageIntegrators'
import Lifes from './pages/Lifes'
import RegisterLife from './pages/RegisterLife'
import DetailsLife from './pages/DetailsLife'
import UserProfile from './pages/UserProfile'
import NotFound from './pages/NotFound'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/integration" element={<Integration />} />
            <Route path="/integration/register" element={<RegisterVisitant />} />
            <Route path="/integration/integrators" element={<ManageIntegrators />} />
            <Route path="/integration/lifes" element={<Lifes />} />
            <Route path="/integration/lifes/register" element={<RegisterLife />} />
            <Route path="/integration/lifes/details/:lifeId" element={<DetailsLife />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}