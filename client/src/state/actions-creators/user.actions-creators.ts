import { Dispatch } from 'redux';
import * as ACTIONS from '../actions/user.actions';
import { toast } from 'react-toastify';
import { axiosInstance } from './axiosHeaderInstance';

export const fetchUsers = () => {
    return (dispatch: Dispatch) => {
        dispatch(ACTIONS.fetchUsersRequest());

        axiosInstance
            .get(`${process.env.REACT_APP_BASE_URL}/users`)
            .then((res) => {
                dispatch(ACTIONS.fetchUsersSuccess(res.data));
            })
            .catch((err) => {
                dispatch(ACTIONS.fetchUsersFailure(err.message))
            })
    }
}

// export const createUser = (data: any) => {
//     return (dispatch: Dispatch) => {
//         dispatch(ACTIONS.createUsersRequest());
//         const toastId = toast.loading('Please wait...')

//         axios
//             .post(`${process.env.REACT_APP_BASE_URL}/users`, data)
//             .then((res) => {
//                 dispatch(ACTIONS.createUsersSuccess(res.data));
//                 toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
//             })
//             .catch((err) => {
//                 dispatch(ACTIONS.createUsersFailure(err.response.data.message));
//                 toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
//             })
//     }
// }

export const updateUser = (data: any, id: any) => {
  return (dispatch: Dispatch) => {
    dispatch(ACTIONS.updateUsersRequest());
    const toastId = toast.loading('Please wait...')

    axiosInstance
      .put(`${process.env.REACT_APP_BASE_URL}/users/${id}`, data)
      .then((res) => {
        dispatch(ACTIONS.updateUsersSuccess(res.data));
        toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
      })
      .catch((err) => {
        dispatch(ACTIONS.updateUsersFailure(err.response.data.message));
        toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
      })
  }
}



// export const deleteUser = (id: any) => {
//     return (dispatch: Dispatch) => {
//         dispatch(ACTIONS.deleteUsersRequest());
//         const toastId = toast.loading('Please wait...')

//         axios
//             .delete(`${process.env.REACT_APP_BASE_URL}/users/${id}`)
//             .then((res) => {
//                 dispatch(ACTIONS.deleteUsersSuccess(res.data));
//                 toast.update(toastId, { render: res.data.message, type: "success", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true, icon: true });
//             })
//             .catch((err) => {
//                 dispatch(ACTIONS.deleteUsersFailure(err.response.data.message));
//                 toast.update(toastId, { render: err.response.data.message, type: "error", isLoading: false, autoClose: 2000, closeButton: true, closeOnClick: true });
//             })
//     }
// }




// export const getSingleUser = (computerID: any) => {

//     return (dispatch: Dispatch) => {
//         dispatch(ACTIONS.getSingleUserRequest());

//         axios
//             .get(`${process.env.REACT_APP_BASE_URL}/users/${computerID}`)
//             .then((res) => {
//                 dispatch(ACTIONS.getSingleUserSuccess(res.data));
//             })
//             .catch((err) => {
//                 dispatch(ACTIONS.getSingleUserFailure(err.response.data.message))
//             })
//     }
// }