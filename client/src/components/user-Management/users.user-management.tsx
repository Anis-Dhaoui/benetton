import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { Loading } from '../Loading/loading';
import { fetchUsers } from '../../state/actions-creators/user.actions-creators';
import RenderUsers from './RenderUsers';

function UsersManagement() {

  const dispatch = useAppDispatch();
  const { loading, users, error, updatedUser } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [updatedUser])

  if (loading) {
    return (
      <>
        <RenderUsers usersList={[]} />
        <Loading />
      </>
    )
  }
  if (error) {
    return (
      <>
        <RenderUsers usersList={[]} />
        <hr />
        <div className="alert alert-danger my-5 mx-5" role="alert">
          {error}
        </div>
      </>

    )
  }

  return (
    <RenderUsers usersList={users?.users} />
  )
}

export default UsersManagement