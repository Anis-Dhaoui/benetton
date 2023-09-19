import React, { useState } from 'react'
import './actionsbtn.scss'
import { deleteComputer } from '../../../../state/actions-creators/computer.actions-creators';
import { useAppDispatch, useAppSelector } from '../../../../state/store.state';
import { getSingleComputer } from '../../../../state/actions-creators/computer.actions-creators';
import ComputerForm from '../../computer-form/AddNewPCButton';
import ModalComputerForm from '../../computer-form/AddEditFormModal';
import { Loading } from '../../../Loading/loading';


function ActionsBtn({ computer }: IComputer | any) {
    const dispatch = useAppDispatch();
    const [delConfAlert, setDelConfAlert] = useState(false)

    const { onePCLoading, pc, onePCError } = useAppSelector(state => state.computers);

    const handleDelete = (pc: IComputer) => {
        dispatch(deleteComputer(pc._id))
    }

    const handleDelConfAlert = () => {
        setDelConfAlert(!delConfAlert);
    }

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal);
        dispatch(getSingleComputer(computer._id))
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
                            <i className="fa fa-edit" onClick={handleShowModal}></i>
                        </div>
                        <div className='col-6'>
                            <i className="fa fa-trash" onClick={handleDelConfAlert}></i>
                        </div>
                    </div>
            }

            {
                onePCLoading ?
                    null
                    :
                    showModal ?
                        <ModalComputerForm show={showModal} onClose={handleShowModal} targetPC={pc} editMode={true} />
                        :
                        null
            }


        </>

    )
}

export default ActionsBtn