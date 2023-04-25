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
  if(computers?.length !== 0){
    return (
      <>
        {
          computers?.map((item) =>{
            return(
              <h1> {item._id} </h1>
            )
          })
        }
      </>
    )        
  }else{
    return(
      <>
        <h3>Your computer list is empty!</h3>
        <button className='btn btn-success'>Add new computer</button>
      </>
    )
  }

}

export default RenderComputers