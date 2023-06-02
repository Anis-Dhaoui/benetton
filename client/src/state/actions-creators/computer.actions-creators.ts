import axios from 'axios';
import { Dispatch } from 'redux';
import * as ACTIONS from '../actions/computer.actions';

export const fetchComputers = () => {

    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.fetchComputersRequest());

        axios
            .get(`${process.env.REACT_APP_BASE_URL}/computers`)
            .then((res) => {
                dispatch(ACTIONS.fetchComputersSuccess(res.data));
            })
            .catch((err) => {
                dispatch(ACTIONS.fetchComputersFailure(err.message))
            })
    }
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ THIS ACTION CREATOR USING ASYNC AWAIT WITH TRY CATCH $$$$$$$$$$$$$$$$$$$$$$$$$$$$
// export const fetchComputers = () => {
//     return async (dispatch: Dispatch<ACTIONS>) => {
//         dispatch({
//             type: ComputerActionsTypes.FETCH_COMPUTERS_REQUEST
//         });

//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/computers`);

//             dispatch({
//                 type: ComputerActionsTypes.FETCH_COMPUTERS_SUCCESS,
//                 payload: data
//             });

//         } catch (err: any) {
//             console.log(err)
//             dispatch({
//                 type: ComputerActionsTypes.FETCH_COMPUTERS_FAILURE,
//                 payload: err.message
//             });
//         }
//     }
// }

export const createComputer = (data: IComputer) => {
    return(dispatch: Dispatch) =>{
        dispatch(ACTIONS.createComputersRequest());

        axios
        .post(`${process.env.REACT_APP_BASE_URL}/computers`, data )
        .then((res) =>{
            dispatch(ACTIONS.createComputersSuccess(res.data));
        })
        .catch((err) =>{
            console.log(err.response.data.message)
            dispatch(ACTIONS.createComputersFailure(err.response.data.message));
        })
    }
}