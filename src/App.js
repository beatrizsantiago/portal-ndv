import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyled'


import MainRoutes from './routes'

function App() {
    return (
        <Router>
            <GlobalStyles />
            <MainRoutes />
        </Router>
    )
}

export default App