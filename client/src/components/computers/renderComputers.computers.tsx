import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../state/store.state';
import { fetchComputers } from '../../state/actions-creators/computer.actions-creators';

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
  }
return(
  <h1>hello from renderComputer</h1>
)

}

export default RenderComputers