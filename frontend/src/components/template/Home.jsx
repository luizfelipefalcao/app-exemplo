import './Home.css'
import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <div className='home'>
                    <h2>Create a new List</h2>
                    <a href="#/easyAddList">
                        <i className="pl-btn fa fa-plus-circle"></i>
                    </a>
            </div>

        )
    }
}

export default Home


