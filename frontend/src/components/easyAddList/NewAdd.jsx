import './NewAdd.css'
import React from 'react'

export default props => {
    return (
        <div role='form' className='newAdd'>
            <input id='description' className='form-control'
                placeholder='Type a new item ...'
                onChange={props.handleChange}
                value={props.description}></input>

            <a onClick={props.handleAdd}>
                <i className="add-btn fa fa-plus-circle"></i>
            </a>
        </div>
    )
}