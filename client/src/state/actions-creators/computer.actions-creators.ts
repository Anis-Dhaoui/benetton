import axios from 'axios';
import { Dispatch } from 'redux';
import * as ACTIONS from '../actions/computer.actions';
import { toast } from 'react-toastify';
import { UseFormReset } from 'react-hook-form';

export const fetchComputers = () => {

    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.fetchComputersRequest());

        axios
            .get(`${process.env.REACT_APP_BASE_URL}/computers`)
            .then((res) => {
                dispatch(ACTIONS.fetchComputersSuccess(res.data));
            })
            .catch((err) => {
                console.log(err)
                dispatch(ACTIONS.fetchComputersFailure(err.response.data.message))
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

export const createComputer = (data: IComputer, reset: UseFormReset<any>, setNetDriveList: any, setSoftList: any) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.createComputersRequest());
        const toastId = toast.loading('Please wait...')

        axios
            .post(`${process.env.REACT_APP_BASE_URL}/computers`, data)
            .then((res) => {
                dispatch(ACTIONS.createComputersSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
                reset();
                setNetDriveList([]);
                setSoftList([]);
            })
            .catch((err) => {
                console.log(err.response.data.message)
                dispatch(ACTIONS.createComputersFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}

export const updateComputer = (data: IComputer, id: string, reset: UseFormReset<any>) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.updateComputersRequest());
        const toastId = toast.loading('Please wait...')

        axios
            .put(`${process.env.REACT_APP_BASE_URL}/computers/${id}`, data)
            .then((res) => {
                dispatch(ACTIONS.updateComputersSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
                reset();
            })
            .catch((err) => {
                console.log(err.response.data.message)
                dispatch(ACTIONS.updateComputersFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}



export const deleteComputer = (id: any) => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.deleteComputersRequest());
        const toastId = toast.loading('Please wait...')

        axios
            .delete(`${process.env.REACT_APP_BASE_URL}/computers/${id}`)
            .then((res) => {
                console.log(res);
                dispatch(ACTIONS.deleteComputersSuccess(res.data));
                toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
            })
            .catch((err) => {
                console.log(err.response.data.message);
                dispatch(ACTIONS.deleteComputersFailure(err.response.data.message));
                toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
            })
    }
}




export const getSingleComputer = (computerID: any) => {

    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.getSingleComputerRequest());

        axios
            .get(`${process.env.REACT_APP_BASE_URL}/computers/${computerID}`)
            .then((res) => {
                dispatch(ACTIONS.getSingleComputerSuccess(res.data));
            })
            .catch((err) => {
                dispatch(ACTIONS.getSingleComputerFailure(err.response.data.message))
            })
    }
}