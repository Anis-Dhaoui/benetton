import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { fetchComputers } from '../../state/actions-creators/computer.actions-creators';
import TableComputer from './computers-table/Table.computers';
import ComputerForm from './Form.computers';

function RenderComputers() {

  const dispatch = useAppDispatch();
  const { loading, computers, error } = useAppSelector(state => state.computers);
  useEffect(() => {
    dispatch(fetchComputers());
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return (
      <div className="alert alert-danger my-5 mx-5" role="alert">
        {error}
      </div>
    )
  } else {
    return (
      <>
      <ComputerForm />
      <TableComputer computersList={computers} />
      </>
    )
  }
}

export default RenderComputers
