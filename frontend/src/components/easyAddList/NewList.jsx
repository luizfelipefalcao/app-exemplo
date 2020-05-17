import './NewList.css'
import React from 'react'
import IconButton from '../template/IconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(addlist => (
            <tr className="tr-custom" key={addlist._id}>
                <td className={`td-custom ${addlist.done ? 'markedAsDone' : ''}`}>
                    {addlist.description}
                </td>
                <td className='td-btn'>
                    <IconButton style='success' icon='check' hide={addlist.done}
                        onClick={() => props.handleMarkAsDone(addlist)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!addlist.done}
                        onClick={() => props.handleMarkAsPending(addlist)}> </IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!addlist.done}
                        onClick={() => props.handleRemove(addlist)} ></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='custom-table'>
            <tbody className='custom-body'>
                {renderRows()}
            </tbody>
        </table>
    )
}