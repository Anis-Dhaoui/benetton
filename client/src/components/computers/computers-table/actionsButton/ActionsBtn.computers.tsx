import React from 'react'
import './actionsbtn.css'


function ActionsBtn() {
    return (
        <>
            <div id='edit-remove' className='row'>
                <div className='col-6'>
                    <i className="fa fa-edit"></i>
                </div>
                <div className='col-6'>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
        </>

    )
}

export default ActionsBtn