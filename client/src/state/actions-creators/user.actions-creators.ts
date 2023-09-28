import axios from 'axios';
import { Dispatch } from 'redux';
import * as ACTIONS from '../actions/user.actions';
import { toast } from 'react-toastify';

const storedData = localStorage.getItem('loggedUser');
var access_token;

if (storedData !== null) {
  const parsedData = JSON.parse(storedData);
  access_token = parsedData.access_token;
}
console.log(access_token)
// Create an Axios instance with default headers
const axiosInstance = axios.create({
    headers: {
      'Authorization': access_token, // Send the token in the 'Authorization' header
      'Content-Type': 'application/json', // Set the content type if needed
    },
  });

// export const fetchUsers = () => {
//     return (dispatch: Dispatch) => {
//         dispatch(ACTIONS.fetchUsersRequest());

//         axios
//             .get(`${process.env.REACT_APP_BASE_URL}/users`)
//             .then((res) => {
//                 dispatch(ACTIONS.fetchUsersSuccess(res.data));
//             })
//             .catch((err) => {
//                 dispatch(ACTIONS.fetchUsersFailure(err.message))
//             })
//     }
// }

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

        axios
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