import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyled'
import moment from 'moment'
import 'moment/min/locales'

import MainRoutes from './routes'

function App() {
    moment.locale('pt-br')
    return (
        <Router>
            <GlobalStyles />
            <MainRoutes />
        </Router>
    )
}

export default App