import axios from 'axios';
import { Dispatch } from 'redux';
import * as ACTIONS from '../actions/computer.actions';
import { toast } from 'react-toastify';
import { UseFormReset } from 'react-hook-form';
import { axiosInstance } from './axiosHeaderInstance';

export const fetchComputers = () => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.fetchComputersRequest());

        axiosInstance
            .get(`${process.env.REACT_APP_BASE_URL}/computers`)
            .then((res) => {
                dispatch(ACTIONS.fetchComputersSuccess(res.data));
            })
            .catch((err: any) => {
                dispatch(ACTIONS.fetchComputersFailure(`${err.response.data.message} ${err.response.data.statusCode}`))
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
//             dispatch({
//                 type: ComputerActionsTypes.FETCH_COMPUTERS_FAILURE,
//                 payload: err.message
//             });
//         }
//     }
// }

export const createComputer = (data: IComputer, reset: UseFormReset<any>, setNetDriveList: any, setSoftList: any) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.createComputersRequest());
        const toastId = toast.loading('Please wait...')

        axiosInstance
            .post(`${process.env.REACT_APP_BASE_URL}/computers`, data)
            .then((res) => {
                dispatch(ACTIONS.createComputersSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
                reset();
                setNetDriveList([]);
                setSoftList([]);
            })
            .catch((err) => {
                dispatch(ACTIONS.createComputersFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}

export const updateComputer = (data: IComputer, id: string, reset: UseFormReset<any>) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.updateComputersRequest());
        const toastId = toast.loading('Please wait...')

        axiosInstance
            .put(`${process.env.REACT_APP_BASE_URL}/computers/${id}`, data)
            .then((res) => {
                dispatch(ACTIONS.updateComputersSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
                reset();
            })
            .catch((err) => {
                dispatch(ACTIONS.updateComputersFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}



export const deleteComputer = (id: any) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.deleteComputersRequest());
        const toastId = toast.loading('Please wait...')

        axiosInstance
            .delete(`${process.env.REACT_APP_BASE_URL}/computers/${id}`)
            .then((res) => {
                dispatch(ACTIONS.deleteComputersSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
            })
            .catch((err) => {
                dispatch(ACTIONS.deleteComputersFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}




export const getSingleComputer = (computerID: any) => {

    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.getSingleComputerRequest());

        axiosInstance
            .get(`${process.env.REACT_APP_BASE_URL}/computers/${computerID}`)
            .then((res) => {
                dispatch(ACTIONS.getSingleComputerSuccess(res.data));
            })
            .catch((err) => {
                dispatch(ACTIONS.getSingleComputerFailure(err.response.data.message))
            })
    }
}