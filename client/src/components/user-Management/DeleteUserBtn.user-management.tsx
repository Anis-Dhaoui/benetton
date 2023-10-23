import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { deleteUser } from '../../state/actions-creators/user.actions-creators';
import './style.user-management.scss';

export default function DeleteUserBtn({user}: IUser | any) {
  const dispatch = useAppDispatch();
  const [delConfAlert, setDelConfAlert] = useState(false)
  const { onePCLoading, pc, onePCError } = useAppSelector(state => state.computers);

  const handleDelete = (userId: IUser) => {
    dispatch(deleteUser(userId))
  }

  const handleDelConfAlert = () => {
    setDelConfAlert(!delConfAlert);
  }

  return (
    <div>
      {
        delConfAlert ?
          <div id='edit-remove' className='row'>
            <div className='col-6'>
              <i className="fa fa-check" onClick={() => handleDelete(user)}></i>
            </div>
            <div className='col-6'>
              <i className="fa fa-close" onClick={handleDelConfAlert}></i>
            </div>
          </div>
          :
          <div id='remove-user-btn' className=''>
              <i className="fa fa-trash" onClick={handleDelConfAlert}></i>
          </div>
      }
    </div>
  )
}
