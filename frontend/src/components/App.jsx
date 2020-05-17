import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './App.css'
import './Style.css'

import React from 'react'

import Header from './template/Header'
import Routes from './Routes'

export default props => (
    <div className="app">
        <Header />
        <Routes />
    </div>
)