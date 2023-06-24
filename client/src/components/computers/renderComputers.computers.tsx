import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { fetchComputers } from '../../state/actions-creators/computer.actions-creators';
import TableComputer from './show-pcs/Table.computers';
import AddNewPCButton from './computer-form/AddNewPCButton';
import { Loading } from '../Loading/loading';

function RenderComputers() {

  const dispatch = useAppDispatch();
  const { loading, computers, error } = useAppSelector(state => state.computers);
  useEffect(() => {
    dispatch(fetchComputers());
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }
  if (error) {
    return (
      <>
        <AddNewPCButton />
        <TableComputer computersList={[]} />
        <hr />
        <div className="alert alert-danger my-5 mx-5" role="alert">
          {error}
        </div>
      </>

    )
  } else {
    return (
      <>
        <AddNewPCButton />
        <TableComputer computersList={computers} />
      </>
    )
  }
}

export default RenderComputers
