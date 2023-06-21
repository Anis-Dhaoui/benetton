import React, { useState } from 'react'
import './actionsbtn.scss'
import { deleteComputer } from '../../../../state/actions-creators/computer.actions-creators';
import { useAppDispatch, useAppSelector } from '../../../../state/store.state';


function ActionsBtn({ computer }: IComputer | any) {
    const dispatch = useAppDispatch();
    const [delConfAlert, setDelConfAlert] = useState(false)

    const handleDelete = (pc: IComputer) => {
        dispatch(deleteComputer(pc._id))
    }

    const handleDelConfAlert = () => {
        setDelConfAlert(!delConfAlert);
    }

    return (
        <>
            {
                delConfAlert ?
                    <div id='edit-remove' className='row'>
                        <div className='col-6'>
                            <i className="fa fa-check" onClick={() => handleDelete(computer)}></i>
                        </div>
                        <div className='col-6'>
                            <i className="fa fa-close" onClick={handleDelConfAlert}></i>
                        </div>
                    </div>
                    :
                    <div id='edit-remove' className='row'>
                        <div className='col-6'>
                            <i className="fa fa-edit"></i>
                        </div>
                        <div className='col-6'>
                            <i className="fa fa-trash" onClick={handleDelConfAlert}></i>
                        </div>
                    </div>
            }



        </>

    )
}

export default ActionsBtn