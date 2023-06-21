import React from 'react'
import './actionsbtn.css'
import { deleteComputer } from '../../../../state/actions-creators/computer.actions-creators';
import { useAppDispatch, useAppSelector } from '../../../../state/store.state';


function ActionsBtn({computer}: IComputer | any) {
  const dispatch = useAppDispatch();
    
    const handleDelete = (pc: IComputer) =>{
        dispatch(deleteComputer(pc._id))
    }
    return (
        <>
            <div id='edit-remove' className='row'>
                <div className='col-6'>
                    <i className="fa fa-edit"></i>
                </div>
                <div className='col-6'>
                    <i className="fa fa-trash" onClick={() => handleDelete(computer)}></i>
                </div>
            </div>
        </>

    )
}

export default ActionsBtn