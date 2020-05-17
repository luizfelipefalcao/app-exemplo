import React from 'react'
import { Router, Redirect, Route, hashHistory } from 'react-router'

import Home from './template/Home'
import About from './about/About'
import EasyAddList from './easyAddList/EasyAddList'

export default props => (
    <Router history={hashHistory}>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='/easyAddList' component={EasyAddList} />
        <Redirect from='*' to='/' />
    </Router>
)